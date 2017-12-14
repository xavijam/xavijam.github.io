---
title: "Primeros pasos con Leaflet, Canvas y geolocalización"
date: 2011-06-11T10:47:00
description: "Primeros pasos con Leaflet, Canvas y geolocalización"
keywords: leaflet, mapas, canvas
categories: [experimento]
tags: [HTML5, Leaflet, API Geolocalización]
---

Hace meses que quería create un ejemplo usando la W3C geolocation API con un custom marker (algo similar a lo que hay para la aplicación de iPhone) en GMaps v3.

Pero recientemente [Leaflet](http://leafletjs.com/) ha aparecido, una pequeña librería de mapas así que he decidido darle una oportunidad. Mi primer intento ha sido:

- Un marker customizado hecho con Canvas.
- Animar el marker con Canvas (posiblemente un poco duro para la CPU, pero un test).

Simplemente con hacer click en la imagen debería funcionar (Psst, dime tu posición :D ). Si quieres mirar el código este está en [GitHub](https://github.com/xavijam/geolocate-point). Además he encontrado un par de cosas raras con la geolocalización:

- En Safari (5.0.5) no devuleve nada dentro de la geolocalización, devuleve un error.
- En Firefox devuelve más información que cualquier otro navegador (ciudad, país, calle, número,...) [échale un ojo en tu navegador](http://davidwalsh.name/dw-content/geolocation.php).

Leaflet está evolucionando y mejorándose continuamente, aunque hay algunas características que están en desarrollo puedes encontrar muchos ejemplos usándolo.