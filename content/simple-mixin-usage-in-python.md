Title: Simple Mixin usage in python
Date: 2013-04-08 01:34
Author: Andrea Zonca
Tags: python
Slug: simple-mixin-usage-in-python

<p>
 One situation where Mixins are useful in Python is when you need to modify  a method of similar classes that you are importing from a package.
 <br/>
</p>
<div>
 <br/>
</div>
<div>
 For just a single class, it is easier to just create a derived class, but if the same modification must be applied to several classes, then it is cleaner to implement this modification once in a Mixin and then apply it to all of them.
</div>
<div>
 <br/>
 <a name="more">
 </a>
</div>
<div>
 Here an example in Django:
</div>
<div>
 <br/>
</div>
<div>
 Django has several generic view classes that allow to pull objects from the database and feed them to the html templates.
</div>
<div>
 <br/>
</div>
<div>
 One for example shows the detail of a specific object:
</div>
<div>
 <br/>
</div>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
  from django.views.generic.detail import DetailView
 </span>
</div>
<div>
 <div>
  <br/>
 </div>
 <div>
  This class has a get_object method that gets an object from the database given a primary key.
 </div>
 <div>
  We need to modify this method to allow access to an object only to the user that owns them.
 </div>
 <div>
  <br/>
 </div>
 <div>
  We first implement a Mixin, i.e. an independent class that only implements the method we wish to override:
 </div>
 <div>
  <br/>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   class OwnedObjectMixin(object):
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   def get_object(self, *args, **kwargs):
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   obj = super(OwnedObjectMixin, self).get_object(*args, **kwargs)
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   if not obj.user == self.request.user:
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   raise Http404
  </span>
 </div>
 <div>
  <span style="font-family: Courier New, Courier, monospace;">
   return obj
  </span>
 </div>
 <div>
  <br/>
 </div>
</div>
<div>
 <span style="font-family: inherit;">
  Then we create a new derived class which inherits both from the Mixin and from the class we want to modify.
 </span>
</div>
<div>
 <span style="font-family: inherit;">
  <br/>
 </span>
</div>
<div>
 <div>
  <div>
   <span style="font-family: Courier New, Courier, monospace;">
    class ProtectedDetailView(OwnedObjectMixin, DetailView):
   </span>
  </div>
  <div>
   <span style="font-family: Courier New, Courier, monospace;">
    pass
   </span>
  </div>
 </div>
</div>
<div>
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<div>
 This overrides the get_object method of DetailView with the get_object method of OwnedObjectMixin, and the call to super calls the get_object method of DetailView, so has the same effect of subclassing DetailView and override the get_object method, but we can be apply the same Mixin to other classes.
</div>