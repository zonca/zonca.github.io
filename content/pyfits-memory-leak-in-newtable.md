Title: pyfits memory leak in new_table
Date: 2011-03-28 17:22
Author: Andrea Zonca
Tags: python, astrophysics
Slug: pyfits-memory-leak-in-newtable

<p>
 I found a memory leakage issue in pyfits.new_table, data were NOT deleted when the table was deleted, I prepared a test on github, using
 <a href="http://mg.pov.lt/objgraph/" title="objgraph">
  objgraph
 </a>
 , which shows that data are still in memory:
 <br/>
 <a name="more">
 </a>
 <a href="https://gist.github.com/884298">
  https://gist.github.com/884298
 </a>
 <br/>
 <br/>
 the issue was solved by Erik Bray of STSCI on March 28th, 2011 , see bug report:
 <br/>
 <a href="http://trac6.assembla.com/pyfits/ticket/49">
  http://trac6.assembla.com/pyfits/ticket/49
  <br/>
 </a>
 and changeset:
 <br/>
 <a href="http://trac6.assembla.com/pyfits/changeset/844">
  http://trac6.assembla.com/pyfits/changeset/844
 </a>
</p>