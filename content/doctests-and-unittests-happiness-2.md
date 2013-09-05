Title: doctests and unittests happiness 2
Date: 2012-08-16 14:07
Author: Andrea Zonca
Tags: python, Quote
Slug: doctests-and-unittests-happiness-2

<blockquote>
 nosetests -v --with-doctest
 <br/>
 Doctest: healpy.pixelfunc.ang2pix ... ok
 <br/>
 Doctest: healpy.pixelfunc.get_all_neighbours ... ok
 <br/>
 Doctest: healpy.pixelfunc.get_interp_val ... ok
 <br/>
 Doctest: healpy.pixelfunc.get_map_size ... ok
 <br/>
 Doctest: healpy.pixelfunc.get_min_valid_nside ... ok
 <br/>
 Doctest: healpy.pixelfunc.get_neighbours ... ok
</blockquote>
<br/>
<a name="more">
</a>
<br/>
<blockquote>
 Doctest: healpy.pixelfunc.isnpixok ... ok
 <br/>
 Doctest: healpy.pixelfunc.isnsideok ... ok
 <br/>
 Doctest: healpy.pixelfunc.ma ... ok
 <br/>
 Doctest: healpy.pixelfunc.maptype ... ok
 <br/>
 Doctest: healpy.pixelfunc.mask_bad ... ok
 <br/>
 Doctest: healpy.pixelfunc.mask_good ... ok
 <br/>
 Doctest: healpy.pixelfunc.max_pixrad ... ok
 <br/>
 Doctest: healpy.pixelfunc.nest2ring ... ok
 <br/>
 Doctest: healpy.pixelfunc.npix2nside ... ok
 <br/>
 Doctest: healpy.pixelfunc.nside2npix ... ok
 <br/>
 Doctest: healpy.pixelfunc.nside2pixarea ... ok
 <br/>
 Doctest: healpy.pixelfunc.nside2resol ... ok
 <br/>
 Doctest: healpy.pixelfunc.pix2ang ... ok
 <br/>
 Doctest: healpy.pixelfunc.pix2vec ... ok
 <br/>
 Doctest: healpy.pixelfunc.reorder ... ok
 <br/>
 Doctest: healpy.pixelfunc.ring2nest ... ok
 <br/>
 Doctest: healpy.pixelfunc.ud_grade ... ok
 <br/>
 Doctest: healpy.pixelfunc.vec2pix ... ok
 <br/>
 Doctest: healpy.rotator.Rotator ... ok
 <br/>
 test_write_map_C (test_fitsfunc.TestFitsFunc) ... ok
 <br/>
 test_write_map_IDL (test_fitsfunc.TestFitsFunc) ... ok
 <br/>
 test_write_alm (test_fitsfunc.TestReadWriteAlm) ... ok
 <br/>
 test_write_alm_256_128 (test_fitsfunc.TestReadWriteAlm) ... ok
 <br/>
 test_ang2pix_nest (test_pixelfunc.TestPixelFunc) ... ok
 <br/>
 test_ang2pix_ring (test_pixelfunc.TestPixelFunc) ... ok
 <br/>
 test_nside2npix (test_pixelfunc.TestPixelFunc) ... ok
 <br/>
 test_nside2pixarea (test_pixelfunc.TestPixelFunc) ... ok
 <br/>
 test_nside2resol (test_pixelfunc.TestPixelFunc) ... ok
 <br/>
 test_inclusive (test_query_disc.TestQueryDisc) ... ok
 <br/>
 test_not_inclusive (test_query_disc.TestQueryDisc) ... ok
 <br/>
 test_anafast (test_sphtfunc.TestSphtFunc) ... ok
 <br/>
 test_anafast_iqu (test_sphtfunc.TestSphtFunc) ... ok
 <br/>
 test_anafast_xspectra (test_sphtfunc.TestSphtFunc) ... ok
 <br/>
 test_synfast (test_sphtfunc.TestSphtFunc) ... ok
 <br/>
 test_cartview_nocrash (test_visufunc.TestNoCrash) ... ok
 <br/>
 test_gnomview_nocrash (test_visufunc.TestNoCrash) ... ok
 <br/>
 test_mollview_nocrash (test_visufunc.TestNoCrash) ... ok
 <br/>
 <br/>
 ----------------------------------------------------------------------
 <br/>
 Ran 43 tests in 19.077s
 <br/>
 <br/>
 OK
</blockquote>