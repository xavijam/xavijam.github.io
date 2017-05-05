---
layout:       post
title:        "First steps with Leaflet: CustomMarker with canvas and geolocation"
date:         2011-06-11 10:47
description:
excerpt:      There is no excerpt for the moment...
categories:   [experiment]
type:         flask
keywords:     leaflet, maps, canvas
---

<div class="BlogPost-columns">
  <p>Several moths ago I wanted to create a working example using W3C geolocation and a custom marker
  (similar to there is in the iphone maps application) in Google Maps v3. But these days has appeared
  <a href="http://leafletjs.com/" title="Leaflet">Leaflet</a>, a new lightweight JavaScript library
  for making tile-based interactive maps, and I've decided to give it a try. My first approach has
  consisted of:</p>
  <ul class="BlogPost-contentList">
    <li class="BlogPost-contentListItem">· A custom marker made with Canvas.</li>
    <li class="BlogPost-contentListItem">· Canvas animation in the marker (probably too heavy for the CPU, but it's a test).</li>
  </ul>
  <p>Just click in the image to try it (Pss, let me to know your position :) ). If you want to download the code, it's in <a href="https://github.com/xavijam/geolocate-point" title="GitHub">github</a>. I've found two things really weird related to geolocation:</p>
  <ul class="BlogPost-contentList">
    <li class="BlogPost-contentListItem">· Safari (5.0.5) doesn't return anything in geolocation, it gets an error :S.</li>
    <li class="BlogPost-contentListItem">· Firefox can give you more information than other browser (city, country, street, number,...), <a href="http://davidwalsh.name/dw-content/geolocation.php" title="geo">try it with your browser</a>.</li>
  </ul>
  <p>Leaflet is continually improving the library, although there are some features under developement, you can find a lot of examples to start using it.</p>
</div>