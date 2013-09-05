Title: Run Hadoop Python jobs on Amazon with MrJob
Date: 2013-09-02 02:36
Author: Andrea Zonca
Tags: bigdata, github, python, aws, hadoop
Slug: run-hadoop-python-jobs-on-amazon-with-mrjob

<br/>
First we need to install mrjob with:
<br/>
<blockquote class="tr_bq">
 pip install mrjob
</blockquote>
I am starting with a simple example of word counting. Previously I implemented this directly using the hadoop streaming interface, therefore mapper and reducer were scripts that read from standard input and print to standard output, see mapper.py and reducer.py in:
<br/>
<br/>
<a href="https://github.com/zonca/python-wordcount-hadoop">
 https://github.com/zonca/python-wordcount-hadoop
</a>
<br/>
<br/>
With MrJob instead the interface is a little different, we implement the mapper  method of our subclass of MrJob that already gets a "line" argument and yields the output as a tuple like ("word", 1).
<br/>
<div>
 MrJob makes the implementation of the reducer particularly simple. Using hadoop-streaming directly, we needed also to first parse back the output of the mapper into python objects, while MrJob does it for you and gives directly the key and the list of count, that we just need to sum.
</div>
<div>
 <br/>
 <a name="more">
 </a>
</div>
<div>
 The code is pretty simple:
 <br/>
 <br/>
 <script src="http://gist-it.appspot.com/github/zonca/python-wordcount-hadoop/blob/master/mrjob/word_count_mrjob.py">
 </script>
 <div>
  <br/>
 </div>
 First we can test locally with 2 different methods, either:
 <br/>
 <br/>
 <blockquote class="tr_bq">
  python word_count_mrjob.py gutemberg/20417.txt.utf-8
 </blockquote>
 <br/>
 or:
 <br/>
 <br/>
 <blockquote class="tr_bq">
  python word_count_mrjob.py --runner=local gutemberg/20417.txt.utf-8
 </blockquote>
 <br/>
 The first is a simple local test, the seconds sets some hadoop variables and uses multiprocessing to run the mapper in parallel.
 <br/>
 <div>
  <br/>
 </div>
 <span style="font-size: large;">
  Run on Amazon Elastic Map Reduce
 </span>
 <br/>
 <br/>
</div>
<div>
 Next step is submitting the job to EMR.
 <br/>
 First get an account on Amazon Web Services from
 <a href="http://aws.amazon.com/">
  aws.amazon.com
 </a>
 .
 <br/>
 <br/>
 Setup MrJob with Amazon:
 <br/>
 <br/>
 <a href="http://pythonhosted.org/mrjob/guides/emr-quickstart.html#amazon-setup">
  http://pythonhosted.org/mrjob/guides/emr-quickstart.html#amazon-setup
 </a>
 <br/>
 <br/>
 <div>
  Then we just need to choose the "emr" runner for MrJob to take care of:
 </div>
 <div>
  <ul>
   <li>
    Copy the python module to Amazon S3, with requirements
   </li>
   <li>
    Copy the input data to S3
   </li>
   <li>
    Create a small EC2 instance (of course we could set it up to run 1000 instead)
   </li>
   <li>
    Run Hadoop to process the jobs
   </li>
   <li>
    Create a local web service that allows easy monitoring of the cluster
   </li>
   <li>
    When completed, copy the results back (this can be disabled to just leave the results on S3.
   </li>
  </ul>
 </div>
 <div>
  e.g.:
 </div>
 <blockquote class="tr_bq">
  python word_count_mrjob.py --runner=emr --aws-region=us-west-2 gutemberg/20417.txt.utf-8
 </blockquote>
 <div>
  It is important to make sure that the aws-region used by MrJob is the same we used for creating the SSH key on the EC2 console in the MrJob configuration step, i.e. SSH keys are region-specific.
  <br/>
  <br/>
  <span style="font-size: large;">
   Logs and output of the run
  </span>
  <br/>
  <br/>
  MrJob copies the needed files to S3:
  <br/>
  <blockquote class="tr_bq">
   . runemr.sh
   <br/>
   using configs in /home/zonca/.mrjob.conf
   <br/>
   using existing scratch bucket mrjob-ecd1d07aeee083dd
   <br/>
   using s3://mrjob-ecd1d07aeee083dd/tmp/ as our scratch dir on S3
   <br/>
   creating tmp directory /tmp/mrjobjob.zonca.20130901.192250.785550
   <br/>
   Copying non-input files into s3://mrjob-ecd1d07aeee083dd/tmp/mrjobjob.zonca.20130901.192250.785550/files/
   <br/>
   Waiting 5.0s for S3 eventual consistency
   <br/>
   Creating Elastic MapReduce job flow
   <br/>
   Job flow created with ID: j-2E83MO9QZQILB
   <br/>
   Created new job flow j-2E83MO9QZQILB
  </blockquote>
  Creates the instances:
  <br/>
  <blockquote class="tr_bq">
   Job launched 30.9s ago, status STARTING: Starting instances
   <br/>
   Job launched 123.9s ago, status BOOTSTRAPPING: Running bootstrap actions
   <br/>
   Job launched 250.5s ago, status RUNNING: Running step (mrjobjob.zonca.20130901.192250.785550: Step 1 of 1)
  </blockquote>
  Creates an SSH tunnel to the tracker:
  <br/>
  <blockquote class="tr_bq">
   Opening ssh tunnel to Hadoop job tracker
   <br/>
   Connect to job tracker at: http://localhost:40630/jobtracker.jsp
  </blockquote>
 </div>
 Therefore we can connect to that address to check realtime information about the cluster running on EC2, for example:
 <br/>
 <br/>
 <div class="separator" style="clear: both; text-align: center;">
  <a href="|filename|/images/run-hadoop-python-jobs-on-amazon-with-mrjob_s1600_awsjobdetails.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
   <img border="0" height="588" src="|filename|/images/run-hadoop-python-jobs-on-amazon-with-mrjob_s640_awsjobdetails.png" width="640"/>
  </a>
 </div>
 <br/>
 Once the job completes, MrJob copies the output back to the local machine, here are few lines from the file:
 <br/>
 <blockquote class="tr_bq">
  "maladies"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  1
  <br/>
  "malaria"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  5
  <br/>
  "male"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  18
  <br/>
  "maleproducing"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  1
  <br/>
  "males"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  5
  <br/>
  "mammal"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  10
  <br/>
  "mammalInstinctive"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  1
  <br/>
  "mammalian"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  4
  <br/>
  "mammallike"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  1
  <br/>
  "mammals"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  87
  <br/>
  "mammoth"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  5
  <br/>
  "mammoths"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  1
  <br/>
  "man"
  <span class="Apple-tab-span" style="white-space: pre;">
  </span>
  152
 </blockquote>
 I've been positively impressed that it is so easy to implement and run a MapReduce job with MrJob without need of managing directly EC2 instances or the Hadoop installation.
 <br/>
 This same setup could be used on GB of data with hundreds of instances.
</div>