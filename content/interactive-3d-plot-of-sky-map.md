Title: Interactive 3D plot of a sky map
Date: 2013-03-12 19:49
Author: Andrea Zonca
Tags: mayavi, python, astrophysics
Slug: interactive-3d-plot-of-sky-map

<a href="http://code.enthought.com/projects/mayavi/">
 Mayavi
</a>
is a Python package from Enthought for 3D visualization, here a simple example of creating a 3D interactive map starting from a HEALPix pixelization sky map:
<br/>
<div>
 <br/>
 <div>
  <div class="separator" style="clear: both; text-align: center;">
   <a href="|filename|/images/interactive-3d-plot-of-sky-map_s1600_snapshot.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
    <img border="0" height="271" src="|filename|/images/interactive-3d-plot-of-sky-map_s400_snapshot.png" width="400"/>
   </a>
  </div>
  <div class="separator" style="clear: both; text-align: center;">
   <br/>
  </div>
  <br/>
  <a name="more">
  </a>
  <br/>
  Here the code:
  <br/>
  <script src="https://gist.github.com/zonca/5146356.js">
  </script>
  <br/>
  <br/>
  The output is a beautiful 3D interactive map, Mayavi allows to pan, zoom and rotate.
  <br/>
  UPDATE 13 Mar: actually there was a bug (found by Marius Millea) in the script, there is no problem in the projection!
  <br/>
  <div class="separator" style="clear: both; text-align: center;">
   <br/>
  </div>
  Mayavi can be installed in Ubuntu installing
  <span style="font-family: Courier New, Courier, monospace;">
   python-vtk
  </span>
  and then
  <span style="font-family: Courier New, Courier, monospace;">
   sudo pip install mayavi.
  </span>
 </div>
</div>