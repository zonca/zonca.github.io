Title: HEALPix map of the Earth using healpy
Date: 2013-08-08 19:07
Author: Andrea Zonca
Slug: healpix-map-of-earth-using-healpy

<p>
 HEALPix maps can also be used to create equal-area pixelized maps of the Earth, RGB colors are not supported in healpy, so we need to convert the image to colorscale.
 <br/>
 The best user case is for using spherical harmonic transforms, e.g. apply a smoothing filter, in this case HEALPix/healpy tools are really efficient.
 <br/>
 However, other tools for transforming between angles (coordinates), 3d vectors and pixels might be useful.
 <br/>
 <br/>
 <a name="more">
 </a>
 <br/>
 I've created an IPython notebook that provides a simple example:
 <br/>
 <br/>
 <a href="http://nbviewer.ipython.org/6187504">
  http://nbviewer.ipython.org/6187504
 </a>
 <br/>
 <br/>
 Here is the output Mollweide projection provided by healpy:
 <br/>
 <br/>
</p>
<div class="separator" style="clear: both; text-align: center;">
 <a href="|filename|/images/healpix-map-of-earth-using-healpy_s1600_download.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
  <img border="0" height="230" src="|filename|/images/healpix-map-of-earth-using-healpy_s400_download.png" width="400"/>
 </a>
</div>
<br/>
Few notes:
<br/>
<br/>
<div>
</div>
<br/>
<ul style="-webkit-text-stroke-width: 0px; color: black; font-family: 'Times New Roman'; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px;">
 <li>
  always use
  <span style="font-family: Courier New, Courier, monospace;">
   flip="geo"
  </span>
  for plotting, otherwise maps are flipped East-West
 </li>
 <li>
  increase the resolution of the plots (which is different from the resolution of the map array) by providing at least xsize=2000 to mollview and a reso lower than 1 to gnomview
 </li>
</ul>