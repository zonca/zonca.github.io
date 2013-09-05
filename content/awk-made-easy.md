Title: awk made easy
Date: 2006-09-22 13:20
Author: Andrea Zonca
Tags: linux, bash
Slug: awk-made-easy

<strong>
 awk '/REGEX/ {print NR "\t" $9 "\t" $4"_"$5 ;}' file.txt
</strong>
<br/>
supports extended REGEX like perl (       e.g. [:blank:]  Space or tab characters )
<br/>
NR is line number
<br/>
NF                Number of fields
<br/>
$n is the column to be printed, $0 is the whole row
<br/>
<br/>
if it only necessary to print columns of a file it is easier to use cut:
<br/>
<br/>
name -a | cut -d" " -f1,3,11,12
<br/>
<br/>
-d: or -d" " is the delimiter
<br/>
-f1,3 are the fields to be displayed
<br/>
other options: -s doesnt show lines without delimiters, --complement is selfesplicative
<br/>
condition on a specific field:
<br/>
$&lt;field&gt; ~ /&lt;string&gt;/   Search for string in specified field.
<br/>
<br/>
you can use awk also in pipes:
<br/>
ll | awk 'NR!=1 {s+=$5} END {print "Average: " s/(NR-1)}'
<br/>
END to process al file and then print results
<br/>
<br/>
tutorial on using awk from the command line:
<br/>
<a href="http://www.vectorsite.net/tsawk_3.html#m1" target="_blank" title="awk tutorial">
 http://www.vectorsite.net/tsawk_3.html#m1
</a>