Title: IPython.parallel for Planck data analysis at NERSC
Date: 2012-09-27 06:24
Author: Andrea Zonca
Tags: ipython, python, Planck
Slug: ipythonparallel-for-planck-data

<a href="http://www.esa.int/planck">
 Planck
</a>
is a Space mission for high precision measurements of the
<a href="http://en.wikipedia.org/wiki/Cosmic_microwave_background_radiation">
 Cosmic Microwave Background
</a>
(CMB), data are received as timestreams of output voltages from the 2 instruments on-board, the Low and High Frequency Instruments [LFI / HFI].
<br/>
<br/>
The key phase in data reduction is map-making, where data are binned to a map of the microwave emission of our galaxy, the CMB, and extragalactic sources. This phase is intrinsically parallel and requires simultaneous access to all the data, so requires a fully parallel MPI-based software.
<br/>
<br/>
However, preparing the data for map-making requires several tasks that are serial, but are data and I/O intensive, therefore need to be parallelized.
<br/>
<br/>
<a name="more">
</a>
<br/>
IPython.parallel offers the easiest solution for managing a large amount of trivially parallel jobs.
<br/>
<br/>
The first task is pointing reconstruction, where we interpolate and apply several rotations and corrections to low-sampled satellite quaternions stored on disk and then write the output dense detector pointing to disk.
<br/>
The disk quota of pointing files is about 2.5TB split in about 3000 files, those files can be processed independently, therefore we implement a function that processes 1 file, to be used interactively for debugging and testing.
<br/>
Then launch an IPython cluster, typically between 20 and 300 engines on Carver (NERSC), and use the exact same function to process all the ~3000 files in parallel.
<br/>
The IPython
<a href="http://ipython.org/ipython-doc/dev/api/generated/IPython.parallel.client.view.html?highlight=apply_async#IPython.parallel.client.view.LoadBalancedView">
 BalancedView
</a>
controller automatically balances the queue therefore we get maximum efficiency, and it is possible to leave the cluster running and submit other instances of the job to be added to its queue.
<br/>
<br/>
Second task is calibration and dipole removal, which processes about 1.2 TB of data, but it needs to read the dense pointing from disk, so it is very I/O intensive. Also in this case we can submit the ~3000 jobs to an IPython.parallel cluster.
<br/>
<br/>
In a next post I'll describe in detail my setup and how I organize my code to make it easy to swap back and forth between debugging code interactively and  running production runs in parallel.
