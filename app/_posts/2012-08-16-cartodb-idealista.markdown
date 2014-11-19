---
layout:       post
title:        "CartoDB ♥ Idealista"
date:         2012-08-16 9:30
description:
excerpt:      There is no excerpt for the moment
path:         cartodb-idealista
thumbnail:    true
categories:   [experiment]
type:         flask
keywords:     maps, Idealista, CartoDB, Leaflet
---

<div class="columns">
  <div class="columns-content">
    <p>
      Everybody has looked for a house at some point in their lives, and it's not an easy job. Some months ago was my turn, and I dove into one of the most important real estate portals in Spain called <a href="http://www.idealista.com" target="_blank">Idealista</a>. Really simple and easy to find a house or flat that fits for you. But (there is always a but) I realized they don't use any kind of maps to represent the districts and neighborhoods, in fact, they use map images.
      <br/><br/>
      <a href="http://www.idealista.com/alquiler-viviendas/madrid/arganzuela/mapa" target="_blank"><img title="idealista-map" alt="idealista-map" src="/assets/img/posts/cartodb-idealista/idealista.jpg" /></a>
      <br/>
      Thanks to this I decided to do an alternative using <a href="http://cartodb.com" target="_blank">CartoDB</a> and <a href="http://leaflet.cloudmade.com" target="_blank">Leaflet</a>. Just a simple interactive example of Madrid districts and neighborhoods.
      <br/><br/>
      <a href="http://xavij.am/idealista" target="_blank"><img title="idealista-map" alt="idealista-map" src="/assets/img/posts/cartodb-idealista/idealista-cartodb.jpg" /></a>
      <br/>
      You can visit the example <a href="http://xavij.am/idealista">here</a>. The code, as always, is in <a href="https://github.com/xavijam/idealista" target="_blank">GitHub</a>, and the data is available in this <a href="https://xavijam.cartodb.com/tables/5275/public" target="_blank">CartoDB table</a> (amount on sale or rent houses are bogus).
      <br/><br/>
      <strong>UPDATED:</strong> Thanks for the corrections <a href="http://twitter.com/javier" target="_blank">@javier</a> :).
    </p>
  </div>
</div>