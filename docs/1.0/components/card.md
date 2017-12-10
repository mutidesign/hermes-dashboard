---
layout: docs
title: Cards
description: Hermes's cards provide a flexible and extensible content container with multiple variants and options.
group: components
toc: true
---

## About

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you're familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no `margin` by default, so use [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) as needed.

### Blog cards

{% example html %}
<div class="card card-blog">
  <div class="card-image">
    <img src="https://images.unsplash.com/photo-1463946377180-f5185c2783e5?auto=format&fit=crop&w=751&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D 751w">
  </div>
  <div class="card-body text-center">
    <h4 class="card-title">We will create a great experience</h4>
    <div class="card-description">
      Cards are an interaction model that are spreading pretty widely, in fact. What all of these have in common is that they're pulling...
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-outline-danger btn-round">View Article</a>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="card card-blog">
  <div class="card-body text-center">
    <h6 class="card-category">
      <i class="fa fa-dribbble" aria-hidden="true"></i>Dribbble
    </h6>
    <h5 class="card-title">
      <a href="#">"Good Design Is as Little Design as Possible"</a>
    </h5>
    <p class="card-description">
      Design makes an important contribution to the preservation of the environment. It conserves resources and minimises physical and visual pollution throughout the lifecycle of the product....
    </p>
    <div class="card-footer text-center">
      <a href="#" class="btn btn-outline-secondary btn-round ">
        <i class="fa fa-bookmark-o"></i>
      </a>
      <a href="#" class="btn btn-outline-secondary btn-round">
        <i class="fa fa-newspaper-o"></i>
        Read
      </a>
    </div>
  </div>
</div>
{% endexample %}

### User card

{% example html %}

<div class="card card-user">
  <div class="image">
      <img src="https://images.unsplash.com/photo-1471201187657-6406da15e43b?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D 500w" alt="..."/>
  </div>
  <div class="card-body">
      <div class="author">
           <a href="#">
          <img class="avatar border-gray" src="https://images.unsplash.com/photo-1481608790904-6b47c88e5b00?auto=format&fit=crop&w=400&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D 400w" alt="..."/>

            <h4 class="title">Mike Andrew<br />
               <small>michael24</small>
            </h4>
          </a>
      </div>
      <p class="description text-center"> 
        "Lamborghini Mercy <br>
            Your chick she so thirsty <br>
            I'm in that two seat Lambo"
      </p>
  </div>
  <hr>
  <div class="text-center">
      <button href="#" class="btn btn-link"><i class="fa fa-facebook-square"></i></button>
      <button href="#" class="btn btn-link"><i class="fa fa-twitter"></i></button>
      <button href="#" class="btn btn-link"><i class="fa fa-google-plus-square"></i></button>

  </div>
</div>
{% endexample %}

### Pricing card

{% example html %}
<div class="card card-pricing">
  <div class="card-body text-center">
    <div class="card-icon">
      <i class="nc-icon nc-istanbul"></i>
    </div>
    <h3 class="card-title">$249</h3>
    <p class="card-description">
      This is good if your company size is between 100 and 299 employees.
    </p>
    <div class="card-footer">
      <a href="#" class="btn btn-round btn-outline-secondary">Choose Plan</a>
    </div>
  </div>
</div>
{% endexample %}


