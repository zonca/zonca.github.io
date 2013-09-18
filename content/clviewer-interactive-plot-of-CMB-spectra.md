Title: clviewer, interactive plot of CMB spectra
Date: 2013-09-17 18:30
Author: Andrea Zonca
Tags: cosmology, python, astrophysics, Planck, dotastronomy
slug: clviewer-interactive-plot-of-CMB-spectra

Today it was HackDay at [.Astronomy](http://dotastronomy.com), so I felt compelled to hack something around myself,
creating something I have been thinking for a while after my previous work on [Interactive CMB power spectra in the browser](http://zonca.github.io/2013/08/interactive-figures-planck-power-spectra.html)

The idea is to get text files from a user and load it in a browser-based interactive display built on top of the [d3.js](http://d3js.org) and [rickshaw](http://code.shutterstock.com/rickshaw/) libraries.

Similar to [nbviewer](http://nbviewer.ipython.org/), I think it is very handy to load data from [Github gists](https://gist.github.com/), because then there is no need of uploading files and it is easier to circulate links.

So I created a small web app, in `Python` of course, using [Flask](http://flask.pocoo.org/) and deployed on [Heroku](http://heroku.com).
It just gets a gist number, calls the Github APIs to load the files, and displays them in the browser:

* Application website: <http://clviewer.herokuapp.com>
* Example input data: <https://gist.github.com/zonca/6599016>
* Example interactive plot: <http://clviewer.herokuapp.com/6599016>
* Source: <https://github.com/zonca/clviewer>
