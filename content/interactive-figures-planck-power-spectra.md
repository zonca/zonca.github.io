Title: Interactive figures in the browser: CMB Power Spectra
Date: 2013-08-30 08:52
Author: Andrea Zonca
Tags: javascript, d3, power spectra, astrophysics, Planck
Slug: interactive-figures-planck-power-spectra

<p>
 For a long time I've been curious about trying out
 <span style="font-family: Courier New, Courier, monospace;">
  d3.js
 </span>
 , the javascript plotting library which is becoming the standard for interactive plotting in the browser.
 <br/>
</p>
<div>
 <br/>
</div>
<div>
 What is really appealing is the capability of sharing with other people powerful interactive visualization simply via the link to a web page. This will hopefully be the future of scientific publications, as envisioned, for example, by
 <a href="https://www.authorea.com/">
  Authorea
 </a>
 .
</div>
<div>
 <a name="more">
 </a>
 An interesting example related to my work on Planck is a plot of the high number of Angular Power Spectra of the anisotropies of the Cosmic Microwave Background Temperature.
</div>
<div>
 The CMB Power spectra describe how the temperature fluctuations were distributed in the sky as a function of the angular scale, for example the largest peak at about 1 degree means that the brightest cold/warm spots of the CMB have that angular size, see
 <a href="http://www.strudel.org.uk/blog/astro/001030.shtml">
  The Universe Simulator in the browser
 </a>
 .
</div>
<div>
 The
 <a href="http://irsa.ipac.caltech.edu/data/Planck/release_1/ancillary-data/">
  Planck Collaboration released
 </a>
 a combined spectrum, which aggregates several channels to give the best result, spectra frequency by frequency (for some frequencies split in detector-sets) and a best-fit spectrum given a Universe Model.
</div>
<div>
 It is also interesting to compare to the latest release spectrum by WMAP with 9 years of data.
</div>
<div>
 <br/>
</div>
<div>
 The plan is to create a visualization where it is easier to zoom to different angular scales on the horizontal axis and quickly show/hide each curve.
</div>
<div>
 For this I used
 <a href="http://code.shutterstock.com/rickshaw/">
  rickshaw
 </a>
 , a library based on
 <span style="font-family: Courier New, Courier, monospace;">
  d3.js
 </span>
 <span style="font-family: inherit;">
  which makes it easier to create time-series plots.
 </span>
</div>
<div>
 <span style="font-family: inherit;">
  In fact most of the features are already implemented, it is just a matter of configuring them, see the code on github:
 </span>
 <a href="https://github.com/zonca/visualize-planck-cl">
  https://github.com/zonca/visualize-planck-cl
 </a>
</div>
<div>
 The most complex task is actually to load all the data, previously converted to JSON, in the background from the server and push them in a data structure which is understood by rickshaw.
</div>
<div>
 <br/>
</div>
<div>
 Check out the result:
</div>
<div style="text-align: center;">
 <b>
  <a href="http://bit.ly/planck-spectra">
   http://bit.ly/planck-spectra
  </a>
 </b>
</div>
<div>
 <br/>
</div>