Title: tar quickref
Date: 2006-09-25 13:19
Author: Andrea Zonca
Tags: linux, bash
Slug: tar-quickref

<p>
 compress: tar cvzf foo.tgz *.cc *.h
 <br/>
 check inside: tar tzf foo.tgz | grep file.txt
 <br/>
 extract: tar xvzf foo.tgz
 <br/>
 extract 1 file only: tar xvzf foo.tgz path/to/file.txt
</p>