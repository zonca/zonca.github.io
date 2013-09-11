Title: Planck CMB map at high resolution
Date: 2013-09-10 14:00
Author: Andrea Zonca
Tags: cosmology, python, astrophysics, Planck
slug: Planck-CMB-map-at-high-resolution

Prompted by a colleague, I created a high-resolution version of the Cosmic Microwave Background map in MollWeide projection released by the Planck collaboration, available on the [Planck Data Release Website](http://irsa.ipac.caltech.edu/data/Planck/release_1/all-sky-maps/previews/COM_CompMap_CMB-smica_2048_R1.20/index.html) in FITS format.

The map is a PNG at a resolution of 17469x8796 pixels, which is suitable for printing at 300dpi up to 60x40 inch, or 150x100 cm, file size is about 150MB.

*Update*: now with Planck color scale

*Update*: previous version had grayed out pixels in the galactic plane represents the fraction of the sky that is not possible to reconstruct due to bright galactic sources. The last version uses inpainting to create a constrained CMB realization with the same statistics as the observed CMB to fill the unobserved pixels, more details in the [Planck Explanatory Supplement](http://www.sciops.esa.int/wikiSI/planckpla/index.php?title=CMB_and_astrophysical_component_maps&instance=Planck_Public_PLA). 

* [High Resolution image on FigShare](http://dx.doi.org/10.6084/m9.figshare.795296)

* Small size preview:

![Preview of Planck CMB map](/images/Planck-CMB-map-at-high-resolution_planck_cmb_map.jpg)

* Python code:

<script src="https://gist.github.com/zonca/6515744.js"></script>
