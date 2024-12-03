# Framework_package
This framework package is a single-sample network-based framework to analyze RNA sequencing data from a cohort of HNSCC patients.

1. Single-Sample Networks (SINs) Construction: Used the sample-specific weighted correlation network (SWEET) method to construct SINs.
2. Subnetwork Extraction: Applied the random walk with restart (RWR) algorithm to extract subnetworks centered on user-specified gene sets.
3. Network Enrichment Analysis: Performed network edge-based enrichment analysis (NEEA) to identify enriched biological pathways to these subnetworks.
This approach reveals biological differences by analyzing gene expression and network structure.

## Framework
<img src="https://github.com/user-attachments/assets/f261edb8-91ce-48e3-b2e7-aed5dffc5172" width="400x900">

## Dependencies and requirement
The framework package code is written in python 3.9.17. Users also need to install following python package listed below:
  - numpy
  - pandas
  - scipy
  - statsmodels
  - matplotlib
  - json
  - networkx

## Installation
<pre><code>pip install git+https://github.com/*HsinYu-Hsu*/Framework_package</code></pre>
<p>If the error message "cannot find command git" was shown, please install "git".</p>
<pre><code>conda install git</code></pre>

## Variable
<p>Framework function:</p>
<pre><code>def framework(GEM, 
              k=0.1, 
              Samples=None, 
              Interest_genes=None,
              save_path=None, 
              pvalue=0.01,                
              rate=0.7)
</code></pre>

## Gene expression data

   - Each elements should be delimited by tab (\t).
   - The gene ID should be entrez ID or ensembl ID.

| Gene | 13-IT | 13-N |
| ---- | ----- | ---- |
| ENSG00000117152 | 1.526069 | 1.321928 |
| ENSG00000179632 | 3.986411 | 3.643856 |
| ENSG00000127314 | 7.681309 | 7.565978 |

## Interest gene list


## Usage and output format
<p>Framework function:</p>
<pre><code>from framework_package import framework
    
  framework('./example/gene_expression.txt',   
              k=0.1, 
              Samples=None, 
              Interest_genes='./example/interest_genes.txt',
              save_path='./example', 
              pvalue=0.01,                
              rate=0.7)
</code></pre>
