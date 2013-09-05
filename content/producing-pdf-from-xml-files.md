Title: Producing PDF from XML files
Date: 2008-03-28 16:27
Author: Andrea Zonca
Tags: linux
Slug: producing-pdf-from-xml-files

<p>
 I need to produce formatted pdf from XML data input file.
 <br/>
 The more standard way looks like to use
 <a href="http://www.w3schools.com/xsl" title="w3schools tutorial">
  XSL stylesheets.
 </a>
 <br/>
 Associating a XSL sheet to an XML file permits most browsers to render them directly as HMTL, this can be used for web publishing XML sheets.
 <br/>
 <br/>
 The quick and dirty way to produce PDF could be printing them from Firefox, but an interesting option is to use
 <a href="http://http://cyberelk.net/tim/software/xmlto/" title="xmlto homepage">
  xmlto
 </a>
 , a script for running a XSL transformation and render an XML in PDF or other formats. It would be interesting to test this script and understand if it needs just docbook XML input or any XML.
</p>