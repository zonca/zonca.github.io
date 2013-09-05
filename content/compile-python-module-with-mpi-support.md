Title: compile python module with mpi support
Date: 2012-07-06 16:08
Author: Andrea Zonca
Slug: compile-python-module-with-mpi-support

<p>
 CC=mpicc LDSHARED="mpicc -shared" python setup.py build_ext -i
</p>