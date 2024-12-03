# Framework_package
A single-sample network-based framework to analyze RNA sequencing data from a cohort of HNC patients.


<img src="https://github.com/user-attachments/assets/f261edb8-91ce-48e3-b2e7-aed5dffc5172" width="400x900">

<p>Framework function:</p>
<pre><code>def framework(GEM, 
              k=0.1, 
              Samples=None, 
              Interest_genes=None,
              save_path=None, 
              pvalue=0.01,                
              rate=0.7)
</code></pre>


| Gene | 13-IT | 13-N |
| ---- | ----- | ---- |
| ENSG00000117152 | 1.526069 | 1.321928 |
| ENSG00000179632 | 3.986411 | 3.643856 |
| ENSG00000127314 | 7.681309 | 7.565978 |

<p>Framework function:</p>
<pre><code>from framework_package import framework
    
framework(file_e='./example/gene_expression.txt', 
              k=0.1, 
              file_p='./example/samples.txt', 
              file_i='./example/interest_genes.txt',
              save_path='./example', 
              pvalue=0.01,                
              rate=0.7)
</code></pre>
