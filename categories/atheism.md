---
layout: default
title: Atheism
category: atheism
description: "Posts about atheist identity, secular ethics, and living without religion."
permalink: /categories/atheism/
---

{% assign archived_posts = site.posts | where_exp: "item", "item.categories contains 'atheism'" %}

<ul>
  {% for post in archived_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
