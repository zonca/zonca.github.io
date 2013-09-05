Title: Export google analytics data via API with Python
Date: 2013-08-04 17:47
Author: Andrea Zonca
Tags: python
Slug: export-google-analytics-data-via-api

<p>
 Fun weekend hacking project: export google analytics data using the google APIs.
 <br/>
 <br/>
 Clone the latest version of the API client from:
 <br/>
 <br/>
 <a href="https://code.google.com/p/google-api-python-client">
  https://code.google.com/p/google-api-python-client
 </a>
 <br/>
 <br/>
 there is an example for accessing analytics APIs in the samples/analytics folder,
 <br/>
 but you need to fill in client_secrets.json.
 <br/>
 <br/>
 You can get the credentials from the APIs console:
 <br/>
 <br/>
 <a href="https://code.google.com/apis/console">
  https://code.google.com/apis/console
 </a>
 <br/>
 <br/>
 In SERVICES: activate google analytics
 <br/>
 In API Access: Create a "Client ID for installed applications" choosing "Other" as a platform
 <br/>
 <br/>
 Copy the client id and the client secret to client_secrets.json.
 <br/>
 <br/>
 <a name="more">
 </a>
 <br/>
 Now you only need the profile ID of the google analytics account, it is in the google analytics web interface, just choose the website, then click on Admin, then on the profile name in the profile tab, and then on profile settings.
 <br/>
 <br/>
 You can then run:
 <br/>
 <br/>
</p>
<blockquote class="tr_bq">
 python core_reporting_v3_reference.py ga:PROFILEID
</blockquote>
The first time you run it, it will open a browser for authentication, but then the auth token is saved and used for future requests.
<br/>
<br/>
This retrieves from the APIs the visits to the website from search, with keywords and the number of visits, for example for my blog:
<br/>
<br/>
<blockquote class="tr_bq">
 Total Metrics For All Results:
 <br/>
 This query returned 25 rows.
 <br/>
 But the query matched 30 total results.
 <br/>
 Here are the metric totals for the matched total results.
 <br/>
 Metric Name  = ga:visits
 <br/>
 Metric Total = 174
 <br/>
 Rows:
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 (not provided)
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 121
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 andrea zonca
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 17
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 butterworth filter python
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 4
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 andrea zonca blog
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 2
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpix for ubuntu
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 2
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpy install ubuntu
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 2
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 python butterworth filter
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 2
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 zonca andrea
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 2
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 andrea zonca buchrain luzern
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 andrea zonca it
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 astrofisica in pillole
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 bin data healpy
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 ellipticity fwhm
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 enthought and healpy
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 fwhm
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpix apt-get
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpix repository ubuntu
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpix ubuntu 12.04 install
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 healpy ubuntu
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 install healpix ubuntu
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 ipython cluster task output
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 numpy pink noise
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 pink noise numpy
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 python 1/f noise
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
 <br/>
 google
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 python apply mixin
 <span class="Apple-tab-span" style="white-space: pre;">
 </span>
 1
</blockquote>
<div>
 <br/>
</div>