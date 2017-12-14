---
title: "Renderizando 5000 markers en Canvas con Leaflet"
date: 2011-06-19T9:30:00
description: "Renderizando 5000 markers en Canvas con Leaflet, un buen experimento"
keywords: leaflet, mapas, canvas
categories: [experiment]
tags: [Leaflet, Google Maps, Canvas]
---

Gracias a [@jatorre](http://twitter.com/jatorre) descubrí una [gran presentación sobre como renderizar miles de puntos con Canvas](http://broady.github.com/Dotter/example.html) en GMaps (usando JS claro está), desarrollado por [@broady](http://twitter.com/broady), un excelente programador que trabajar para Google.

Este usa marcadores de GMaps con un simple canvas como imagen. Así que he decidido create el mismo ejemplo pero con Leaflet, con dos opciones:

  * Renderizar puntos con un marker de Leaflet ([ir](http://xavijam.github.com/Leaflet-Dotter/?markers=true)).
  * Renderizar puntos con un marker customizado ([ir!](http://xavijam.github.com/Leaflet-Dotter/)).

En mi opinión la diferencia es sensible usando un marker customizado en vez de un marker de Leaflet. Como siempre, el código fuente está disponible en [GitHub](https://github.com/xavijam/Leaflet-Dotter).

Además, si quieres comparalo en detalle, hace una semana hice el mismo experimento con GMaps + customizado GMaps OverlayView.