Title: switch to interactive backend with ipython -pylab
Date: 2010-08-21 00:33
Author: Andrea Zonca
Tags: python
Slug: switch-to-interactive-backend-with

<p>
 objective:
 <br/>
</p>
<ol>
 <br/>
 <li>
  when running ipython without pylab or executing scripts you want to use an image matplotlib backend like Agg
 </li>
 <br/>
 <li>
  just when calling ipython -pylab you want to use an interactive backend like GTKAgg or TKAgg
 </li>
 <br/>
</ol>
<br/>
<a name="more">
</a>
<br/>
<br/>
you need first to setup as default backend on .matplotlib/matplotlibrc
<strong>
 Agg
</strong>
:
<br/>
<code>
 backend      : Agg
</code>
<br/>
then setup you ipython to switch to interactive, in ipython file Shell.py, in the class MatplotlibShellBase, at about line 516, add:
<br/>
<code>
 matplotlib.use('GTKAgg')
</code>
<br/>
after the first import of matplotlib
