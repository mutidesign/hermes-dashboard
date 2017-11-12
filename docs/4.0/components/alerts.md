---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](#dismissing).

{% example html %}
{% for color in site.data.theme-colors %}
<div class="alert alert-{{ color.name }}" role="alert">
  This is a {{ color.name }} alert—check it out!
</div>{% endfor %}
{% endexample %}

For more details and options please check the [Bootstrap Official Documentation](https://getbootstrap.com/docs/4.0/components/alerts/).

