# -*- coding: utf-8 -*-
"""
Created on Thu Nov  7 16:35:49 2024

@author: sysmed
"""

import argparse
import numpy as np
import sys
import os
import networkx as nx
import pandas as pd
from scipy import stats

def check_file(expres):
    checkset = set(["", "NA", "Na", "na", "nan", "null"])
    for c in checkset:
        loc = np.where(expres == c)
        if loc[0].size:
            expres[loc] = "0"
            print(f"There is {c} in the 'gene expression matrix' file and it will be assigned to 0.")
    return expres


# parser = argparse.ArgumentParser(description="Manual")
# parser.add_argument("-f", type=str , default="./example/gene_expression.txt" , help="expression file")#expression profile
# parser.add_argument("-l", type=str, default="./example" , help='network file path')# sweet network file path
# parser.add_argument("-c", type=str, default="0.05" , help='network pvalue cutoff value')# network pvalue cutoff value
# parser.add_argument("-p", type=str , default="./example/samples.txt" , help="sample file")#patient file
# parser.add_argument("-i", type=str , default="./example/interest_genes.txt" , help="interest gene file")#interest gene file
# parser.add_argument("-a", type=str , default="0.9" , help="alpha value (1-restart rate)")# 1-restart rate
# parser.add_argument("-s", type=str , default="./example" , help="save path")#save path

# args = parser.parse_args()
# file_e , file_l = args.f , args.l 
# pvalue = args.c
# file_p , file_i = args.p , args.i
# alpha = args.a
# save_path = (args.s).rstrip('/')

def edge_to_adjacency_matrix(edge_list, num_nodes):
    adjacency_matrix = np.zeros((num_nodes, num_nodes), dtype=bool)
    for edge in edge_list:
        i, j = edge
        adjacency_matrix[i, j] = True
        adjacency_matrix[j, i] = True
    return adjacency_matrix

def create_gene_weight_dictionary(nodes,genelist):
    dictionary = {}
    for g in nodes :
        g = genum[g]
        if g in genelist :
            dictionary[g]=1
        else :
            dictionary[g]=0
    return dictionary

def calculate_pagerank(G, dictionary):
    rwr_score = nx.pagerank(G, personalization=dictionary, alpha = (1-float(rate)))
    return rwr_score


def rwr(file_e, pvalue, file_p, file_i, rate, save_path) :

    gem_file = file_e
    gem = pd.read_csv(gem_file,sep='\t',index_col=0)
    
    genum={}
    genumr={}
    for n,m in zip(range(len(gem.index)),gem.index) :
        # m = m.split('_')[0]
        genum[m]=n
        genumr[n]=m
    num_nodes = len(gem.index)
        
    patlist = []
    with open(file_p, mode='r') as rline:
        for nline in rline:
            tem = nline.strip('\n').split('\t')
            patlist.append(tem[0])
    
    geneset = set()
    pair = []
    file = f"{save_path}/{patlist[0]}.txt"
    if not os.path.exists(file):
        print(f"{file} not found")
        sys.exit()
    with open(f"{save_path}/{patlist[0]}.txt", mode='r') as rline:
        _ = rline.readline()
        for nline in rline:
            if nline != '\n':
                val = nline.strip('\n').split('\t')
                geneset.add(val[0]+'\t'+val[1])
                pair.append(val[2])
    
    zscore = stats.norm.isf(float(pvalue)/2)
    
    for p in patlist[0:]:
        print(p)
        file = f"{save_path}/{p}_zscore.txt"        
        with open(f'{save_path}/{p}_{pvalue}_rwr{rate}_score.txt','w') as w:
            
            edge_list = []
            nodes = set()
            with open(f'{save_path}/{p}_zscore.txt', 'r') as f:
                _ = f.readline()
                for line in f:
                    i, j, k = line.strip('\n').split('\t')
                    # i = i.split('_')[0]
                    # j = j.split('_')[0]
                    if np.abs(float(k)) >= float(zscore) :
                        nodes.add(str(i))
                        nodes.add(str(j))
                        I = genum[str(i)]
                        J = genum[str(j)]
                        edge_list.append((I, J))
            
            adj_matrix = edge_to_adjacency_matrix(edge_list, num_nodes)
            G = nx.from_numpy_array(adj_matrix)
            print('nodes='+str(len(G.nodes))+'\n')
            print('edges='+str(len(G.edges))+'\n')
            
            genelist = []
            with open(f'{file_i}','r') as f :
                for line in f :
                    gene = genum[line.strip()]
                    genelist.append(gene)
            dictionary = create_gene_weight_dictionary(nodes,genelist)
            
            rwr_score = calculate_pagerank(G, dictionary)
            
            for s in rwr_score :
                w.write(str(genumr[s])+'\t'+str(rwr_score[s])+'\n')
    
    # print('Finish')     
