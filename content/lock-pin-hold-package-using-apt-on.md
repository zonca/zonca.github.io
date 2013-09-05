Title: lock pin hold a package using apt on ubuntu
Date: 2010-01-07 13:49
Author: Andrea Zonca
Tags: linux, ubuntu
Slug: lock-pin-hold-package-using-apt-on

<p>
 set hold:
 <br/>
 <code>
  echo packagename hold | dpkg --set-selections
 </code>
 <br/>
 <br/>
 check, should be
 <strong>
  hi
 </strong>
 :
 <br/>
 <code>
  dpkg -l packagename
 </code>
 <br/>
 <br/>
 unset hold:
 <br/>
 <code>
  echo packagename install | dpkg --set-selections
 </code>
</p>