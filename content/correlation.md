Title: Correlation
Date: 2010-01-28 00:45
Author: Andrea Zonca
Tags: physics
Slug: correlation

<strong>
 Expectation value
</strong>
or first moment of a random variable is the probability weighted sum of the possible values (weighted mean).
<br/>
Expectation value of a 6-dice is 1+2+3+4+5+6 / 6 = 3.5
<br/>
<br/>
<strong>
 Covariance
</strong>
of 2 random variables is:
<br/>
<code>
 COV(X,Y)=E[(X-E(X))(Y-E(Y))]=E(X*Y) - E(X)E(Y)
</code>
<br/>
i.e. the difference between the expected value of their product and the product of their expected values.
<br/>
So if the variables change together, they will have a high covariance, if they are independent, their covariance is zero.
<br/>
<br/>
<strong>
 Variance
</strong>
is the covariance on the same variable, :
<br/>
<code>
 COV(X,X)=VAR(X)=E(X**2) - E(X)**2
</code>
<br/>
<br/>
<strong>
 Standard deviation
</strong>
is the square root of Variance
<br/>
<br/>
<strong>
 Correlation
</strong>
is:
<br/>
<code>
 COR(X,Y)=COV(X,Y)/STDEV(X)*STDEV(Y)
</code>
<br/>
<br/>
<br/>
<a href="http://mathworld.wolfram.com/Covariance.html">
 http://mathworld.wolfram.com/Covariance.html
</a>