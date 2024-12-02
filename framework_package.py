# -*- coding: utf-8 -*-
"""
Created on Tue Nov 12 15:01:49 2024

@author: sysmed
"""


import os 
import argparse
from . import 1.SWEET_sample_weight_calculating_HNSCC as SWEET1
from . import 2.SWEET_edge_weight_calculating_HNSCC as SWEET2
from . import 3.SWEET_calculating_mean_std_zscore_HNSCC as SWEET3
from . import 4.RWR_algorithm as RWR
from . import 5.knee_point as KNEE
from . import 6.create_subnetwork as SUBNETWORK
from . import 7.NEEA as NEEA

# parser = argparse.ArgumentParser(description="Manual")
# parser.add_argument("-f", type=str , default="./example/gene_expression.txt" , help="expression file")#expression profile
# parser.add_argument("-c", type=str, default="0.05" , help='network pvalue cutoff value')# network pvalue cutoff value
# parser.add_argument("-p", type=str , default="./example/samples.txt" , help="sample file")#patient file
# parser.add_argument("-g", type=str , default="./example/genes.txt" , help="gene file")#gene file
# parser.add_argument("-i", type=str , default="./example/interest_genes.txt" , help="interest gene file")#interest gene file
# parser.add_argument("-a", type=str , default="0.9" , help="alpha value (1-restart rate)")# 1-restart rate
# parser.add_argument("-s", type=str , default="./example" , help="save path")#save path
# parser.add_argument("-z", type=bool, default=True, help="Indicates whether the calculation of z score (Ture) or not (False)")

# args = parser.parse_args()
# file_e = args.f
# pvalue = args.c
# file_p = args.p
# file_g = args.g
# file_i = args.i
# alpha = args.a
# save_path = (args.s).rstrip('/')


# commands  = [f'python ./1.SWEET_sample_weight_calculating_HNSCC.py -f {file_e} -s {save_path}',
#              f'python ./2.SWEET_edge_weight_calculating_HNSCC.py -f {file_e} -p {file_p} -g {file_g} -s {save_path}',
#              f'python ./3.SWEET_calculating_mean_std_zscore_HNSCC.py -p {file_p} -s {save_path} -z True',
#              f'python ./4.RWR_algorithm.py -f {file_e} -p {file_p} -c {pvalue} -a {alpha} -i {file_i} -s {save_path}',
#              f'python ./5.knee_point.py -p {file_p} -c {pvalue} -a {alpha} -s {save_path}',
#              f'python ./6.create_subnetwork.py -p {file_p} -c {pvalue} -a {alpha} -s {save_path}',
#              f'python ./7.NEEA.py -p {file_p} -c {pvalue} -a {alpha} -s {save_path}']

# for command in commands:
#     print(command)
#     result = os.system(command)
    
#     if result != 0:
#         print(f"Error occurred in command: {command}")
#         break

def framework(file_e, 
              k=0.1, 
              file_p, 
              save_path, 
              pvalue=0.01, 
              file_i, 
              rate=0.7) :
    
    #check GEM
    if not os.path.isfile(file_e): #確認檔案存在
        print('GEM file does not exist')
        return

    
    #check sample list file
    if not os.path.isfile(file_p): #確認檔案存在
        print('sample list file does not exist')
        return
    
    #check interest gene list file
    if not os.path.isfile(file_i): #確認檔案存在
        print('interest gene list file does not exist')
        return
    
    
    
    SWEET1.sweet1(file_e, k, save_path)
    
    SWEET2.sweet2(file_e, file_p, save_path)
    
    SWEET3.sweet3(file_p, save_path)
    
    RWR.rwr(file_e, pvalue, file_p, file_i, rate, save_path)
    
    KNEE.knee_point(pvalue, file_p, rate, save_path)
    
    SUBNETWORK.creat_network(pvalue, file_p, rate, save_path)
    
    NEEA.neea(pvalue, file_p, rate, save_path)
    
    
    
    
    
    
    
    
    
    
    
    
    