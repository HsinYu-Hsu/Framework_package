# Framework_package
This framework package is a single-sample network-based framework to analyze RNA sequencing data from a cohort of HNSCC patients.

1. Single-Sample Networks (SINs) Construction: Used the sample-specific weighted correlation network (SWEET) method to construct SINs.
2. Subnetwork Extraction: Applied the random walk with restart (RWR) algorithm to extract subnetworks centered on user-specified gene sets.
3. Pathway Enrichment Analysis: Performed network edge-based enrichment analysis (NEEA) to identify enriched biological pathways to these subnetworks.
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
### Framework function
<pre><code>def framework(GEM, 
              k=0.1, 
              output_network='no',
              Samples=None, 
              Interest_genes=None,
              save_path=None, 
              pvalue=0.01,                
              rate=0.7)
</code></pre>

| Variable | Description | 
| ---- | ----- |
| GEM | A path to "gene expression data" file. |
| k | Balance parameter. Default: 0.1. |
| output_network | Decide whether to export the created network as a txt file ('no','yes'). Default: 'no'. |
| Samples | A path to "sample list" file. |
| Interest_genes | A path to "interest gene list" file. |
| save_path | A path to the output files. |
| pvalue | The cutoff for constructing networks will set to different p-values. Default: 0.01. |
| rate | The restart rate for calculating random walk with restart algorithm, which should be set between 0 and 1. Default: 0.7. |

## Gene expression data

   - Each elements should be delimited by tab (\t).
     - Columns: Samples.
     - Rows: Genes.
   - The gene ID should be entrez ID or ensembl ID.

| Gene | 13-IT | 13-N |
| ---- | ----- | ---- |
| ENSG00000117152 | 1.526069 | 1.321928 |
| ENSG00000179632 | 3.986411 | 3.643856 |
| ENSG00000127314 | 7.681309 | 7.565978 |

## Interest gene list

  - Gene ID should be the same for gene expression data.
  - Each elements should be seperated with \n.

|  |
| ---- |
| ENSG00000117152 |
| ENSG00000179632 |
| ENSG00000127314 |

## Usage and output format
### Import and execute framework function with python

  - All example input file can be found in "example_input" folder.
  - All example output file can be found in "example_output" folder.

<pre><code>from framework_package import framework  
    
framework('./example_input/gene_expression.txt',   
            k=0.1, 
            output_network='yes'
            Samples='./example_test/samples.txt', 
            Interest_genes='./example_test/interest_genes.txt',
            save_path='./example_output', 
            pvalue=0.01,                
            rate=0.7)
</code></pre>

### Sample weight file
Sample weight result output (Example file: "gene_expression_weight.txt" in "example_output" folder)

| sample | sample_weight |
| ---- | ---- |
| 13-IT | 4.17586578629123 |
| 13-N | 4.302891217808787 |
|---- | ---- |

### Sample subnetwork file
| gene1 | gene2 | z-score |
| ---- | ---- | ---- |
| ENSG00000070610 | ENSG00000166387 | -2.9484170173090085 |
| ENSG00000070610 | ENSG00000172236 | -2.873478066857216 |
| ENSG00000117152 | ENSG00000166387 | -2.8527161492919006 |
| ---- | ---- | ---- |

### Pathway enrichment analysis result
Pathway enrichment analysis result output (Example file: "{sample}_{pvalue}_rwr{rate}_edge_based_hyper.txt" in "example_output" folder)

  - The result shows the significant associations between each subnetwork and KEGG pathway.

| Pathway name | P-value | FDR q-value | N | M | n | m |
| ---- | ---- | ---- | --- | --- | --- | --- |
| Glycolysis / Gluconeogenesis | ---- | ---- | --- | --- | --- | --- |
| Citrate cycle (TCA cycle) | ---- | ---- | --- | --- | --- | --- |
| Pentose phosphate pathway | ---- | ---- | --- | --- | --- | --- |
| ---- | ---- | ---- | --- | --- | --- | --- |
