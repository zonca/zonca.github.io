Title: healpix coordinates
Date: 2010-06-23 01:01
Author: Andrea Zonca
Tags: astrophysics, physics
Slug: healpix-coordinates

<p>
 Healpix considers
 <strong>
  latitude
 </strong>
 theta from 0 on north pole to pi south pole,
 <br/>
 so the conversion is:
 <br/>
 <code>
  theta = pi/2 - latitude
 </code>
 <br/>
 <strong>
  longitude
 </strong>
 and phi instead are consistently from 0 to 2*pi with
 <br/>
</p>
<ul>
 <br/>
 <li>
  zero on vernal equinox (for
  <a href="http://en.wikipedia.org/wiki/Ecliptic_coordinate_system">
   ecliptic
  </a>
  ).
 </li>
 <br/>
 <li>
  zero in the direction from Sun to galactic center (for
  <a href="http://en.wikipedia.org/wiki/Galactic_coordinate_system">
   galactic
  </a>
  )
 </li>
 <br/>
</ul>