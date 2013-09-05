Title: memory map npy files
Date: 2011-01-07 21:04
Author: Andrea Zonca
Tags: python, numpy
Slug: memory-map-npy-files

<p>
 Mem-map the stored array, and then access the second row directly from disk:
 <br/>
 <br/>
 <code>
  X = np.load('/tmp/123.npy', mmap_mode='r')
 </code>
</p>