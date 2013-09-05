Title: ipython and PyTrilinos
Date: 2011-02-16 19:10
Author: Andrea Zonca
Tags: parallel programming, python
Slug: ipython-and-pytrilinos

<ol>
 <br/>
 <li>
  start ipcontroller
 </li>
 <br/>
 <li>
  start ipengines:
  <br/>
  <code>
   mpiexec -n 4 ipengine --mpi=pytrilinos
  </code>
 </li>
 <br/>
 <li>
  start ipython 0.11:
  <br/>
  <code>
   import PyTrilinos
   <br/>
   from IPython.kernel import client
   <br/>
   mec = client.MultiEngineClient()
   <br/>
   %load_ext parallelmagic
   <br/>
   mec.activate()
   <br/>
   px import PyTrilinos
   <br/>
   px comm=PyTrilinos.Epetra.PyComm()
   <br/>
   px print(comm.NumProc())
  </code>
 </li>
 <br/>
</ol>