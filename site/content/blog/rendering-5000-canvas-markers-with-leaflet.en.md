---
title: "Rendering 5000 canvas markers with Leaflet"
date: 2011-06-19T9:30:00
description: "Rendering 5000 canvas markers with Leaflet and Canvas, a nice experiment"
keywords: leaflet, maps, canvas
---

Thanks to [@jatorre](http://twitter.com/jatorre) I discovered a [great representation of thousand of markers using Canvas](http://broady.github.com/Dotter/example.html) image in Google Maps (using Javascript of course), developed by [@broady](http://twitter.com/broady), a great developer working at Google.

It uses Gmaps markers with a simple canvas transformed to image. So
I’vedecided to create the same example with Leaflet, with two options:

  * Rendering points with Leaflet marker ([go](http://xavijam.github.com/Leaflet-Dotter/?markers=true)).
  * Rendering points with a custom own marker (go!).

From my point of view the difference is sensible using own marker than Leaflet marker. As always, the source is available on [GitHub](https://github.com/xavijam/Leaflet-Dotter).

Also, if you want to compare deeply, I made one week ago the same experiment with GMaps) + custom Gmaps OverlayView.

