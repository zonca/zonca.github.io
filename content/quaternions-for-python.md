Title: quaternions for python
Date: 2010-06-21 07:21
Author: Andrea Zonca
Tags: python, physics
Slug: quaternions-for-python

<p>
 the situation is pretty problematic, I hope someday
 <strong>
  scipy
 </strong>
 will add a python package for rotating and interpolating quaternions, up to now:
 <br/>
</p>
<ul>
 <br/>
 <li>
  <a href="http://cgkit.sourceforge.net/doc2/quat.html">
   http://cgkit.sourceforge.net/doc2/quat.html
  </a>
  : slow, bad interaction with numpy, I could not find a simple way to turn a list of N quaternions to a 4xN array without a loop
 </li>
 <br/>
 <li>
  <a href="http://cxc.harvard.edu/mta/ASPECT/tool_doc/pydocs/Quaternion.html">
   http://cxc.harvard.edu/mta/ASPECT/tool_doc/pydocs/Quaternion.html
  </a>
  : more lightweight, does not implement quaternion interpolation
 </li>
 <br/>
</ul>