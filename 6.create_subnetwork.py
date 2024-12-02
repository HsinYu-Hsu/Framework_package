# -*- coding: utf-8 -*-
"""
Created on Thu Nov  7 18:18:02 2024

@author: sysmed
"""
import argparse
import os, sys
import numpy as np
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
# parser.add_argument("-l", type=str, default="./example" , help='network file path')# sweet network file path
# parser.add_argument("-r", type=str, default="./example" , help='rwr score network path')# rwr score network path
# parser.add_argument("-c", type=str, default="0.05" , help='network pvalue cutoff value')# network pvalue cutoff value
# parser.add_argument("-p", type=str , default="./example/samples.txt" , help="sample file")#patient file
# parser.add_argument("-a", type=str , default="0.9" , help="alpha value (1-restart rate)")# 1-restart rate
# parser.add_argument("-k", type=str , default="./example" , help="knee point file path")# knee point file path
# parser.add_argument("-s", type=str , default="./example" , help="save path")#save path

# args = parser.parse_args()
# file_l = args.l 
# file_r = args.r
# pvalue = args.c
# file_p = args.p
# alpha = args.a
# file_k = args.k
# save_path = (args.s).rstrip('/')

def create_network(pvalue, file_p, rate, save_path) :

    knee_point = {}
    with open(f'{save_path}/{pvalue}_rwr{rate}_knee_point.txt','r') as f1 :
        for line in f1 :
            i, j = line.strip().split('\t')
            knee_point[i]=j
    
    zscore = stats.norm.isf(float(pvalue)/2)
    
    patlist = []
    with open(file_p, mode='r') as rline:
        for nline in rline:
            tem = nline.strip('\n').split('\t')
            patlist.append(tem[0])
    
    for p in patlist[0:]:
        print(p)
        genes = []
        with open(f'{save_path}/{p}_{pvalue}_rwr{rate}_score.txt','r') as f2 :
            for line in f2 :
                if float(line.strip().split('\t')[1]) >= float(knee_point[f'{p}']) :
                    genes.append(line.strip().split('\t')[0])
               
        with open(f'{save_path}/{p}_zscore.txt','r') as f3 , open(f'{save_path}/{p}_{pvalue}_rwr{rate}_subnetwork.txt','w') as w :
            _ = f3.readline()
            for line in f3 :
                i, j, k = line.strip('\n').split('\t')
                if np.abs(float(k)) >= float(zscore) :
                    if line.strip().split('\t')[0] in genes and line.strip().split('\t')[1] in genes :
                        w.write(line)
    # print('Finish')                    