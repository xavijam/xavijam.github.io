---
layout:       post
title:        "Rendering 5000 canvas markers with Leaflet"
date:         2011-06-19 9:30
description:
excerpt:      There is no excerpt for the moment...
categories:   [experiment]
type:         flask
keywords:     leaflet, map, canvas, rendering
---

<div class="BlogPost-columns">
  <p class="BlogPost--noMargin">Thanks to <a href="http://twitter.com/jatorre" title="Javier de la Torre">@jatorre</a> I discovered a
  <a href="http://broady.github.com/Dotter/example.html">great representation of thousand of markers using
  canvas</a> image in Google Maps (using Javascript of course), developed by
  <a href="http://twitter.com/broady" title="Broady">@broady</a>, a great Google developer.</p>
  <p>It uses Gmaps markers with a simple canvas transformed to image. So I’vedecided to create the same
  example with Leaflet, with two options:</p>
  <ul class="BlogPost-contentList">
    <li class="BlogPost-contentListItem">· Rendering points with Leaflet marker (<a href="http://xavijam.github.com/Leaflet-Dotter/?markers=true" title="leaflet-dotter">go</a>).</li>
    <li class="BlogPost-contentListItem">· Rendering points with a custom own marker (<a herf="http://xavijam.github.com/Leaflet-Dotter/" title="leaflet-dotter">go!</a>).</li>
  </ul>
  <p class="BlogPost--noMargin">From my point of view the difference is sensible using own marker than Leaflet marker. As always, the
  source is available on <a href="https://github.com/xavijam/Leaflet-Dotter" title="GitHub">GitHub</a>.</p>
  <p>Also, if you want to compare deeply, I made one week ago the same experiment with
  <a href="http://xavijam.github.com/Gmaps-Dotter/" title="GMaps">GMaps</a>) + custom Gmaps OverlayView.</p>
</div>