---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

### Selected Publications

- **Generative Adversarial Learning with Negative Data Augmentation for Semi-supervised Text Classification**  
  *Shahriar Shayesteh, Diana Inkpen*  
  Issued: Vol. 35 (2022): Proceedings of FLAIRS-35
