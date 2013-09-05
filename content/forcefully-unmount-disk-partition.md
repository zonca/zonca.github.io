Title: forcefully unmount a disk partition
Date: 2008-09-17 15:14
Author: Andrea Zonca
Tags: linux
Slug: forcefully-unmount-disk-partition

<p>
 check which processes are accessing a partition:
 <br/>
 <br/>
 [sourcecode language="python"]lsof | grep '/opt'[/sourcecode]
 <br/>
 <br/>
 kill all the processes accessing the partition (check what you're killing, you could loose data):
 <br/>
 <br/>
 [sourcecode language="python"]fuser -km /mnt[/sourcecode]
 <br/>
 <br/>
 try to unmount now:
 <br/>
 [sourcecode language="python"]umount /opt[/sourcecode]
</p>
