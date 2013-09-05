Title: Stop ipcluster from a script
Date: 2010-02-19 02:23
Author: Andrea Zonca
Tags: parallel programming, python
Slug: stop-ipcluster-from-script

<p>
 Ipcluster is easy to start but not trivial to stop from a script, after having finished the processing, here's the solution:
 <br/>
 <code>
  from IPython.kernel import client
  <br/>
  mec = client.MultiEngineClient()
  <br/>
  mec.kill(controller=True)
 </code>
</p>