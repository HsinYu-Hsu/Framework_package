import os 
import Step1_SWEET_sample_weight_calculating_HNSCC as SWEET1
import Step2_SWEET_edge_weight_calculating_HNSCC as SWEET2
import Step3_SWEET_calculating_mean_std_zscore_HNSCC as SWEET3
import Step4_RWR_algorithm as RWR
import Step5_knee_point as KNEE
import Step6_create_subnetwork as SUBNETWORK
import Step7_NEEA_hyper as NEEA

def framework(GEM, 
              k=0.1, 
              output_network=None,
              Samples=None, 
              Interest_genes=None,
              save_path=None, 
              pvalue=0.01,                
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
    
    # check output folder
    if save_path != None:
        if not os.path.isdir(save_path): #確認資料夾存在
            print('Output folder does not exist')
            return
    else:
        print('Please input the output directory')
        return
    
    
    
    print('Constructing SWEET networks....')
    SWEET1.sweet1(GEM, k, save_path)
    
    SWEET2.sweet2(GEM, Samples, save_path)
    
    SWEET3.sweet3(Samples, save_path, output_network)
    print('Complete\n')
    
    
    print('Calculate RWR algorithm....')
    RWR.rwr(GEM, pvalue, Samples, Interest_genes, rate, save_path)
    
    KNEE.knee_point(pvalue, Samples, rate, save_path)
    print('Complete\n')
    
    print('Constructing subnetworks....')
    SUBNETWORK.create_subnetwork(pvalue, Samples, rate, save_path)
    print('Complete\n')
    
    
    print('Calculating NEEA....')
    NEEA.neea(pvalue, Samples, rate, save_path)
    print('Complete\n')
    
    
    
    
    
    
    
    
    
    
    
    