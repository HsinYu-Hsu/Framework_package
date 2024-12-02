# -*- coding: utf-8 -*-
"""
Created on Thu Nov  7 18:42:57 2024

@author: sysmed
"""
import argparse
import glob
import sys,os
import pandas as pd
import numpy as np
from scipy import stats
from scipy.stats import hypergeom
import statsmodels.stats.multitest
from collections import defaultdict

def check_file(expres):
    checkset = set(["", "NA", "Na", "na", "nan", "null"])
    for c in checkset:
        loc = np.where(expres == c)
        if loc[0].size:
            expres[loc] = "0"
            print(f"There is {c} in the 'gene expression matrix' file and it will be assigned to 0.")
    return expres

# parser = argparse.ArgumentParser(description="Manual")
# parser.add_argument("-l", type=str, default="./example" , help='network file path')# sweet network file path
# parser.add_argument("-r", type=str, default="./example" , help='rwr subnetwork path')# rwr subnetwork path
# parser.add_argument("-c", type=str, default="0.05" , help='network pvalue cutoff value')# network pvalue cutoff value
# parser.add_argument("-p", type=str , default="./example/samples.txt" , help="sample file")#patient file
# parser.add_argument("-a", type=str , default="0.9" , help="alpha value (1-restart rate)")# 1-restart rate
# parser.add_argument("-gid", type=str , default="./example/geneid_ens2ez.txt" , help="gene id file")#gene id file
# parser.add_argument("-kegg", type=str , default="./example/KEGG_api_347_hsa_pathway_20220518_v102.txt" , help="347kegg file")#347kegg pathway file
# parser.add_argument("-s", type=str , default="./example" , help="save path")#save path

# args = parser.parse_args()
# file_l = args.l 
# file_r = args.r
# pvalue = args.c
# file_p = args.p
# alpha = args.a
# file_gid = args.gid
# file_kegg = args.kegg
# save_path = (args.s).rstrip('/')

### ez -> ens
data_e = {}
with open("./example/geneid_ens2ez.txt",'r')as f:
    _g = f.readline()
    for line in f:
        g_e, ent = line.strip('\n').split(',')     
        g_e = [(g_e)]
        if ent == '':
            continue
        else:   
            if ent in data_e.keys() :
                # ent = ent.split()    
                data_e[ent].extend(g_e)
            else :
                data_e[ent] = g_e
# Pathway edges (ens)
def calculate_pathway_edges_ens(pathway_file):
    # Record genes
    pathway_gene = defaultdict(list)
    with open(pathway_file, 'r') as input_term:
        for line_term in input_term:
            id, name, genes = line_term.strip().split('\t')
            for g in genes.split(','):
                if g in data_e :
                    for k in data_e[g] :
                        pathway_gene[name].append(k)
    # Record edges
    pathway_edge = defaultdict(list)
    for i,j in pathway_gene.items():
            for x in j:
                for y in j:
                    if(x != y):
                        pathway_edge[i].append(f'{x}-{y}') #including A-B, B-A
    return pathway_edge

# Pathway edges (ez)
def calculate_pathway_edges_ez(pathway_file):
    # Record genes
    pathway_gene = defaultdict(list)
    with open(pathway_file, 'r') as input_term:
        for line_term in input_term:
            id, name, genes = line_term.strip().split('\t')
            for g in genes.split(','):
                pathway_gene[name].append(g)
    # Record edges
    pathway_edge = defaultdict(list)
    for i,j in pathway_gene.items():
            for x in j:
                for y in j:
                    if(x != y):
                        pathway_edge[i].append(f'{x}-{y}') #including A-B, B-A
    return pathway_edge
                
# Calculate network edges (N,n)

zscore = stats.norm.isf(float(pvalue)/2)

def calculate_network_edges(load_path):
    node_set = set()
    edge_set = set()
    with open(load_path,'r') as f :
        _ = f.readline()
        for line in f :
            g1, g2, w = line.strip('\n').split('\t')
            # g1=g1.split('_')[0]
            # g2=g2.split('_')[0]
            if np.abs(float(w)) >= float(zscore) :
                node_set.add(g1)
                node_set.add(g2)
                edge_set.add(g1+'-'+g2)
                edge_set.add(g2+'-'+g1)
    num_nodes = len(node_set)
    num_edges = len(edge_set)/2 # A-B, B-A only need to calculate in one time
    return num_edges, edge_set

# Calculate overlapping edges (M,m)
def calculate_overlapping_edges(network_edge, pathway_edge):
    network_overlapping = {}
    for i,j in pathway_edge.items():
        if len(set(j) & network_edge) > 0: overlapping_edges = len(set(j) & network_edge)/2 # A-B, B-A only need to calculate in one time
        else: overlapping_edges = 0
        network_overlapping[i] = overlapping_edges
    return network_overlapping
    
# Hypergeometric p-value
def Record(sample, save, N, network_overlapping, n, subnetwork_overlapping):
    m1 , m3,  m4 , m5 , m6 , m7  = [] , [] , [] , [] , [] , [] 
    with open(save, 'w') as w_line :
        w_line.write('Pathway name\tP-value\tFDR q-value\tN\tM\tn\tm\n')
        for i,j in zip(network_overlapping.items(),subnetwork_overlapping.items()):
            M = i[1]
            m = j[1]
            hyper = hypergeom.sf(m-1,N,M,n)
            m1.append(i[0])
            m3.append(hyper)
            m4.append(N)
            m5.append(M)
            m6.append(n)
            m7.append(m)
        if len(m3) == 0:
            print("No pathways!")
            return False
        m8 = statsmodels.stats.multitest.multipletests(m3,method='fdr_bh',alpha=0.05)[1]
        for result in zip(m1 , m3 , m8 , m4 , m5 , m6 , m7) :
            w_line.write('\t'.join(str(s) for s in result)+'\n')

# if __name__ == '__main__':
    
def neea(pvalue, file_p, rate, save_path) : 
    
    patlist = []
    with open(file_p, mode='r') as rline:
        for nline in rline:
            tem = nline.strip('\n').split('\t')
            patlist.append(tem[0])

    for p in patlist[0:]:
        
        # Pathway
        pathway_file = "./example/KEGG_api_347_hsa_pathway_20220518_v102.txt"
        
        
        # Whole network
        # N
        ori_load_path=f'{save_path}/{p}_zscore.txt'
        N, edge_set = calculate_network_edges(ori_load_path)
        
        if edge_set[0].startswith('ENS') :
            pathway_edge = calculate_pathway_edges_ens(pathway_file)
        else :
            pathway_edge = calculate_pathway_edges_ez(pathway_file)
        
        # M
        network_overlapping = calculate_overlapping_edges(edge_set, pathway_edge)

        # sub-network 
        sub_load_path = f'{save_path}/{p}_{pvalue}_rwr{rate}_subnetwork.txt'
        # n
        n, sub_edge_set = calculate_network_edges(sub_load_path)
        # m
        subnetwork_overlapping = calculate_overlapping_edges(sub_edge_set, pathway_edge)

        save = f'{save_path}/{p}_{pvalue}_rwr{rate}_edge_based_hyper.txt'
        Record(p, save, N, network_overlapping, n, subnetwork_overlapping)
        print(f'{p} Done!')

                