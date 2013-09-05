Title: How to use the IPython notebook on a small computing cluster
Date: 2013-06-22 11:12
Author: Andrea Zonca
Tags: hpc, ipython
Slug: how-to-use-ipython-notebook-on-small

<span style="font-weight: normal;">
 <a href="http://ipython.org/ipython-doc/dev/interactive/htmlnotebook.html">
  The IPython notebook
 </a>
 is a powerful and easy to use interface for using Python and particularly useful when running remotely, because it allows the interface to run locally in your browser, while the computing kernel runs remotely on the cluster.
</span>
<br/>
<span style="font-weight: normal;">
 <br/>
</span>
<br/>
<h3>
 1) Configure IPython notebook:
</h3>
<div>
 First time you use the notebook you need to follow this configuration steps:
</div>
<div>
 <br/>
</div>
Login to the cluster
<br/>
<br/>
Load the python environment, for example:
<br/>
<blockquote class="tr_bq">
 &gt; module load pythonEPD
</blockquote>
Create the profile files:
<br/>
<blockquote class="tr_bq">
 &gt; ipython profile create # creates the configuration files
 <br/>
 &gt; vim .ipython/profile_default/ipython_notebook_config.py
</blockquote>
set a password, see instructions in the file.
<br/>
<br/>
Change the port to something specific to you,
<b>
 please change this to avoid conflict with other users
</b>
:
<br/>
<blockquote class="tr_bq">
 c.NotebookApp.port = 8900
</blockquote>
Set a certificate to serve the notebook over https:
<br/>
<blockquote>
 c.NotebookApp.certfile = u'/home/zonca/mycert.pem'
</blockquote>
or create a new certificate, see
<a href="http://ipython.org/ipython-doc/dev/interactive/htmlnotebook.html">
 http://ipython.org/ipython-doc/dev/interactive/htmlnotebook.html
</a>
.
<br/>
<br/>
Set:
<br/>
<blockquote>
 c.NotebookApp.open_browser = False
</blockquote>
<h3>
 <a name="more">
 </a>
</h3>
<h3>
 2) Run the notebook for testing on the login node.
</h3>
You can use IPython notebook on the login node if you do not use much memory, e.g. &lt; 300MB.
<br/>
<br/>
ssh into the login node, at the terminal run:
<br/>
<br/>
&gt; ipython notebook --pylab=inline
<br/>
<br/>
open the browser on your local machine and connect to (always use https, replace 8900 with your port):
<br/>
<blockquote class="tr_bq">
 <b>
  https
 </b>
 ://LOGINNODEURL:8900
</blockquote>
Dismiss all the browser complaints about the certificate and go ahead.
<br/>
<h3>
 <b>
  3) Run the notebook on a computing node
 </b>
</h3>
You should always use a computing node whenever you need a large amount of resources.
<br/>
<br/>
Create a folder notebooks/ in your home, just copy this script in runipynb.pbs in your that folder:
<br/>
<script src="https://gist.github.com/zonca/5840518.js">
</script>
<br/>
<div>
 replace LOGINNODEURL with the url of the login node of your cluster.
</div>
<div>
 <br/>
</div>
<div>
 NOTICE: you need to ask the sysadmin to set "GatewayPorts yes" in sshd_config on the login node to allow access externally to the notebook.
 <br/>
 <br/>
 Submit the job to the queue running:
 <br/>
 <br/>
 qsub runipynb.pbs
</div>
<div>
 <br/>
</div>
<div>
 Then from your local machine connect to (replace 8900 with your port):
</div>
<div>
 <blockquote class="tr_bq">
  <b>
   https
  </b>
  ://LOGINNODEURL:8900
  <br/>
  <div>
   <br/>
  </div>
 </blockquote>
 <h3>
  Other introductory python resources
 </h3>
 <br/>
 <ul>
  <li>
   <a href="http://scipy-lectures.github.io/">
    Scientific computing with Python
   </a>
   , large and detailed introduction to Python, Numpy, Matplotlib, Scipy
  </li>
  <li>
   My
   <a href="https://github.com/zonca/PythonHPC">
    Python for High performance computing
   </a>
   : slides and few ipython notebook examples, see the README
  </li>
  <li>
   <a href="http://www.blogger.com/%C2%A0https://github.com/zonca/healpytut/blob/master/healpytut.pdf?raw=true">
    My short Python and healpy tutorial
   </a>
  </li>
 </ul>
</div>