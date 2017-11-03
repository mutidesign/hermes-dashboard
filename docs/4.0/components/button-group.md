---
layout: docs
title: Button group
description: Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.
group: components
toc: true
---

## Basic example

Wrap a series of buttons with `.btn` in `.btn-group`. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#button-plugin).

{% example html %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
{% endexample %}

## Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

{% example html %}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">8</button>
  </div>
</div>
{% endexample %}

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<div class="bd-example">
  <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
{% endhighlight %}

