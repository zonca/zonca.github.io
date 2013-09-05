Title: using numpy dtype with loadtxt
Date: 2010-03-03 22:49
Author: Andrea Zonca
Tags: linux, python, numpy
Slug: using-numpy-dtype-with-loadtxt

<p>
 Let's say you want to read a text file like this:
 <br/>
 <br/>
 <br/>
</p>
<blockquote>
 #filename start end
 <br/>
 fdsafda.fits 23143214 23143214
 <br/>
 safdsafafds.fits 21423 23423432
</blockquote>
<br/>
<br/>
<br/>
<a name="more">
</a>
<br/>
you can use dtype to create a custom array, which is very flexible as you can work by row or columns with strings and floats in the same array:
<br/>
<code>
 dt=np.dtype({'names':['filename','start','end'],'formats':['S100',np.float,np.float]})
 <br/>
</code>
[I tried also using np.str instead of S100 without success, anyone knows why?]
<br/>
then give this as input to loadtxt to load the file and create the array.
<br/>
<code>
 a = np.loadtxt(open('yourfile.txt'),dtype=dt)
</code>
<br/>
so each element is:
<br/>
<code>
 ('dsafsadfsadf.fits', 1.6287776249537126e+18, 1.6290301584937428e+18)
 <br/>
</code>
<br/>
but you can get the array of start or end times using:
<br/>
<code>
 a['start']
</code>