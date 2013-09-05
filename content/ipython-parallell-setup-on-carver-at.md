Title: IPython parallell setup on Carver at NERSC
Date: 2013-04-11 05:53
Author: Andrea Zonca
Tags: hpc, supercomputing, ipython, python
Slug: ipython-parallell-setup-on-carver-at

<p>
 IPython parallel is one of the easiest ways to spawn several Python sessions on a Supercomputing cluster and process jobs in parallel.
 <br/>
 <br/>
 On Carver, the basic setup is running a controller on the login node, and submit engines to the computing nodes via PBS.
 <br/>
 <br/>
 <a name="more">
 </a>
 <br/>
 First create your configuration files running:
 <br/>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  ipython profile create --parallel
 </span>
 <br/>
 <br/>
 Therefore in the ~/.config/ipython/profile_default/ipcluster_config.py, just need to set:
 <br/>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  c.IPClusterStart.controller_launcher_class = 'LocalControllerLauncher'
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  c.IPClusterStart.engine_launcher_class = 'PBS'
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  c.PBSLauncher.batch_template_file = u'~/.config/ipython/profile_default/pbs.engine.template'
 </span>
 <br/>
 <br/>
 You also need to allow connections to the controller from other hosts, setting  in ~/.config/ipython/profile_default/ipcontroller_config.py:
 <br/>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  c.HubFactory.ip = '*'
 </span>
 <br/>
</p>
<div>
 <br/>
</div>
With the path to the pbs engine template.
<br/>
<br/>
Next a couple of examples of pbs templates, for 2 or 8 processes per node:
<script src="https://gist.github.com/zonca/5334225.js">
</script>
<br/>
IPython configuration does not seem to be flexible enough to add a parameter for specifying the processes per node.
<br/>
So I just created a bash script that get as parameters the processes per node and the total number of nodes:
<br/>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 ipc 8 2 # 2 nodes with 8ppn, 16 total engines
</span>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 ipc 2 3 # 3 nodes with 2ppn, 6 total engines
</span>
<br/>
<br/>
<span style="font-family: inherit;">
 Once the engines are running, jobs can be submitted opening an IPython shell on the login node and run:
</span>
<br/>
<span style="font-family: inherit;">
 <br/>
</span>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 from IPython.parallel import Client
</span>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 rc = Client()
</span>
<br/>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 lview = rc.load_balanced_view() # default load-balanced view
</span>
<br/>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
  def serial_func(argument):
 </span>
</div>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
  pass
 </span>
</div>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
  parallel_result = lview.map(serial_func, list_of_arguments)
 </span>
</div>
<br/>
<div style="font-family: inherit;">
 <br/>
</div>
<div>
 <span style="font-family: inherit;">
  The serial function is sent to the engines and executed for each element of the list of arguments.
 </span>
</div>
<div>
 <span style="font-family: inherit;">
  If the function returns a value, than it is transferred back to the login node.
 </span>
</div>
<div>
 <span style="font-family: inherit;">
  In case the returned values are memory consuming, is also possible to still run the controller on the login node, but execute the interactive IPython session in an interactive job.
 </span>
</div>
<div style="font-family: inherit;">
 <br/>
</div>
<div style="font-family: inherit;">
 <br/>
</div>