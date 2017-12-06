---
layout: docs
title: Navbar
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: components
toc: true
---

## How it works

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Use our [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) and [flex]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Navbars are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.navbar`. See the [display]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) utility class. 
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `mg` (medium) breakpoint.

{% example html %}
<nav class="navbar navbar-expand-md" style="background:black;">
   <button class="navbar-toggler d-sm-block d-lg-none" type="button" data-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-search"></i></div>
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search anything you want">
        </div>
      </ul><!--navbar left-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
            <div class="notification d-none d-lg-block d-xl-block"></div>
            <i class="nc-icon nc-notification-70"></i>
            <b class="caret d-none d-lg-block d-xl-block" style="margin-left:25px; margin-top: -15px;"></b>
            <p class="d-lg-none">
            New Notifications
            <b class="caret"></b>
          </p>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#"  class="dropdown-item">Notification 1</a></li>
            <li><a href="#" class="dropdown-item">Notification 2</a></li>
            <li><a href="#" class="dropdown-item">Notification 3</a></li>
            <li><a href="#" class="dropdown-item">Notification 4</a></li>
            <li><a href="#" class="dropdown-item">Another Notification</a></li>
          </ul>
        </li>
        <li class="separator d-lg-none"></li>
      </ul><!--navbar right-->
    </div>
  </nav>

{% endexample %}


## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Choose from `.navbar-light` for use with light background colors, or `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities.

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
   <button class="navbar-toggler d-sm-block d-lg-none" type="button" data-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-search"></i></div>
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search anything you want">
        </div>
      </ul><!--navbar left-->
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nc-icon nc-map-big"></i>
            <p class="d-lg-none">Contacts</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nc-icon nc-bell-55"></i>
            <p class="d-lg-none">Messages</p>
          </a>
        </li>
        <li class="separator d-lg-none"></li>
      </ul><!--navbar right-->
    </div>
  </nav>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary" >
   <button class="navbar-toggler d-sm-block d-lg-none" type="button" data-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-search"></i></div>
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search anything you want">
        </div>
      </ul><!--navbar left-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nc-icon nc-map-big"></i>
            <p class="d-lg-none">Contacts</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nc-icon nc-bell-55"></i>
            <p class="d-lg-none">Messages</p>
          </a>
        </li>
        <li class="separator d-lg-none"></li>
      </ul><!--navbar right-->
    </div>
  </nav>

{% highlight html %}
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

{% endhighlight %}

## Placement

Use our [position utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/#feat=css-sticky)**.

{% example html %}
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Default</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar fixed-bottom navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed bottom</a>
</nav>
{% endexample %}

{% example html %}
<nav class="navbar sticky-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Sticky top</a>
</nav>
{% endexample %}

## Responsive behaviors

Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don't add any `.navbar-expand` class.

