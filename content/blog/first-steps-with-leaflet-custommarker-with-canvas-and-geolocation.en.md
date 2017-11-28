---
title: "First steps with Leaflet: CustomMarker with canvas and geolocation"
date: 2011-06-11T10:47:00
---

Several moths ago I wanted to create a working example using W3C geolocation and a custom marker (similar to there is in the iphone maps application) in Google Maps v3.

But recently [Leaflet](http://leafletjs.com/) has appeared, a new lightweight JavaScript library for making tile-based interactive maps, and I've decided to give it a try. My first approach has consisted of:

- A custom marker made with Canvas.
- Canvas animation in the marker (probably too heavy for the CPU, but it's a test).

Just click in the image to try it (Pss, let me to know your position :) ). If you want to download the code, it's in [GitHub](https://github.com/xavijam/geolocate-point). I've found two things really weird related to geolocation:

- Safari (5.0.5) doesn't return anything in geolocation, it gets an error :S.
- Firefox can give you more information than other browser (city, country, street, number,...), [try it with your browser](http://davidwalsh.name/dw-content/geolocation.php).

Leaflet is continually improving the library, although there are some features under developement, you can find a lot of examples to start using it.