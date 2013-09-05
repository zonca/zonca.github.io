Title: count hits with numpy
Date: 2010-07-23 15:18
Author: Andrea Zonca
Tags: python, numpy
Slug: count-hits-with-numpy

<p>
 I have an array where I record hits
 <br/>
 <code>
  a=np.zeros(5)
 </code>
 <br/>
 and an array with the indices of the hits, for example I have 2 hits on index 2
 <br/>
 <code>
  hits=np.array([2,2])
 </code>
 <br/>
 so I want to increase index 2 of a by 2
 <br/>
 <a name="more">
 </a>
 <br/>
 I tried:
 <br/>
 <code>
  a[hits]+=1
 </code>
 <br/>
 but it gives array([ 0.,  0.,  1.,  0.,  0.])
 <br/>
 does someone have a suggestion?
 <br/>
 <code>
  bins=np.bincount(hits)
  <br/>
  a[:len(bins)] += bins
  <br/>
  a
  <br/>
  array([ 0.,  0.,  2.,  0.,  0.])
 </code>
</p>