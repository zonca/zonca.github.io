Title: Ubuntu PPA for HEALPix and healpy
Date: 2012-12-17 10:37
Author: Andrea Zonca
Tags: healpix, ubuntu
Slug: ubuntu-ppa-for-healpix-and-healpy

<br/>
<b>
 HEALPix C, C++
</b>
version 3.00 and
<b>
 healpy
</b>
version 1.4.1 are now available in a PPA repository for Ubuntu 12.04 Precise and Ubuntu 12.10 Quantal.
<br/>
<br/>
First remove your previous version of
<span style="font-family: Courier New, Courier, monospace;">
 healpy
</span>
, just find the location of the package:
<br/>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 &gt; python -c "import healpy; print healpy.__file__"
</span>
<br/>
<br/>
and remove it:
<br/>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 &gt; sudo rm -r /some-base-path/site-packages/healpy*
</span>
<br/>
<div style="font-family: 'Courier New', Courier, monospace;">
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<span style="font-family: inherit;">
 Then add the apt repository and install the packages:
</span>
<br/>
<div style="font-family: 'Courier New', Courier, monospace;">
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<span style="font-family: Courier New, Courier, monospace;">
 &gt; sudo add-apt-repository ppa:zonca/healpix
</span>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 &gt; sudo apt-get update
</span>
<br/>
<span style="font-family: Courier New, Courier, monospace;">
 &gt; sudo apt-get install healpix-cxx libhealpix-cxx-dev
</span>
<span style="font-family: 'Courier New', Courier, monospace;">
</span>
<span style="font-family: 'Courier New', Courier, monospace;">
 libchealpix0
</span>
<span style="font-family: 'Courier New', Courier, monospace;">
 libchealpix-dev python-healpy
</span>
<br/>
<br/>
<div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   &gt; which anafast_cxx
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   /usr/bin/anafast_cxx
  </span>
 </div>
</div>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
 </span>
 <br/>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   &gt; python -c "import healpy; print healpy.__version__"
  </span>
 </div>
 <span style="font-family: Courier New, Courier, monospace;">
 </span>
 <br/>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   1.4.1
  </span>
 </div>
</div>