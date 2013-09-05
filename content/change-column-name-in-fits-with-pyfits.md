Title: change column name in a fits with pyfits
Date: 2010-06-30 22:06
Author: Andrea Zonca
Tags: python
Slug: change-column-name-in-fits-with-pyfits

<p>
 no way to change it manipulating the dtype of the data array.
 <br/>
 <code>
  a=pyfits.open('filename.fits')
  <br/>
  a[1].header.update('TTYPE1','newname')
 </code>
 <br/>
 you need to change the header, using the update method of the right TTYPE and then write again the fits file using a.writeto.
</p>