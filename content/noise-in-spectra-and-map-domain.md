Title: Noise in spectra and map domain
Date: 2013-04-08 01:32
Author: Andrea Zonca
Tags: map, power spectra, noise
Slug: noise-in-spectra-and-map-domain

<h3>
 Spectra
</h3>
NET or $\sigma$ is the standard deviation of the noise, measured in mK/sqrt(Hz), typical values for microwave amplifiers are 0.2-5.
<br/>
This is the natural unit of the amplitude spectra (ASD), therefore the high frequency tail of the ASD should get to the expected value of the NET.
<br/>
NET can also be expressed in mKsqrt(s), which is NOT the same unit.
<br/>
<b>
 mK/sqrt(Hz)
</b>
refers to an integration bandwidth of 1 Hz that assumes a 6dB/octave rolloff, its integration time is only about 0.5 seconds.
<br/>
<b>
 mK/sqrt(s)
</b>
instead refers to integration time of 1 second, therefore assumes a top hat bandpass.
<br/>
Therefore there is a factor of sqrt(2) difference between the two conventions, therefore mK/sqrt(Hz) = sqrt(2) * mK sqrt(s)
<br/>
See appendix B of Noise Properties of the Planck-LFI Receivers
<br/>
<a href="http://arxiv.org/abs/1001.4608">
 http://arxiv.org/abs/1001.4608
</a>
<br/>
<h3>
 Maps
</h3>
To estimate the map domain noise instead we need to integrate the sigma over the time per pixel; in this case it is easier to convert the noise to sigma/sample, therefore we need to multiply by the square root of the sampling frequency:
<br/>
<br/>
sigma_per_sample = NET * sqrt(sampling_freq)
<br/>
<br/>
Then the variance per pixel is sigma_per_sample**2/number_of_hits
<br/>
<h3>
 Angular power spectra
</h3>
<div>
 $C_\ell$ of the variance map is just the variance map multiplied by the pixel area divided by the integration time.
 <br/>
 <br/>
 $$C_\ell = \Omega_{\rm pix} \langle \frac{\sigma^2}{\tau} \rangle = \Omega_{\rm pix} \langle \frac{\sigma^2 f_{\rm samp}}{hits} \rangle$$
</div>