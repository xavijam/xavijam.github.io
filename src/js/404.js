var $ = require('jquery');
var d3 = require("d3");
var topojson = require("topojson");

var OPTIONS = {
  mapRatio: 0.5,
  maxScale: 1000,
  minScale: 1
};

var debounce;

var Map = function ($el) {
  this.$el = $el;
  setTimeout(this._initMap.bind(this), 100);
  this._setMapSize = this._setMapSize.bind(this);

  window.onresize = function () {
    clearTimeout(debounce);
    debounce = setTimeout(this._setMapSize, 200);
  }.bind(this);
};

Map.prototype._initMap = function () {
  var self = this;
  var size = this._getMapSize();
  this.projection = d3.geo.orthographic()
    .rotate([0, 90])
    .scale(1000)
    .translate([size[0] / 2, size[1] / 2])
    .precision(.1)
    .clipAngle(90);

  this.path = d3.geo.path()
    .projection(this.projection);

  this.zoom = d3.behavior.zoom()
    .scaleExtent([OPTIONS.minScale, OPTIONS.maxScale])
    .on("zoom", this._redraw.bind(this));

  d3.select(this.$el.get(0)).append("svg")
    .attr("width", size[0])
    .attr("height", size[1])
    .call(this.zoom)

  this.g = d3.select('svg').append("g");

  this.g.append("path")
    .datum(d3.geo.graticule())
    .attr("d", this.path)
    .attr("class", "graticule");

  var div = d3.select("body").append("div")
    .attr("class", "Map-tooltip")
    .style("display", "none");

  this.g.append("path").attr("class", "antarctica");

  d3.json("/data/antarctica-bounds.json", function(e, topology) {
    var antarcticaPath = d3.select("path.antarctica");
    antarcticaPath
      .datum(topojson.feature(topology, topology.objects.antartide))
      .attr("d", self.path);
  });

  d3.csv("/data/antarctica-stations.csv", function(e, stations) {
    stations.forEach(function(station) {
      self.g.append('circle')
        .attr("cx", function(d) {
          return self.projection([station.longitude, station.latitude])[0];
        })
        .attr("cy", function(d) {
          return self.projection([station.longitude, station.latitude])[1];
        })
        .attr("class", "station")
        .attr("r", 4)
        .on("mousemove", function () {
          div
            .text(station.name)
            .style("left", (d3.event.pageX - 65) + "px")
            .style("bottom", (self.$el.height() - d3.event.pageY + 12) + "px");
        })
        .on("mouseover", function (d) {
          div.style("display", "inline");
        })
        .on("mouseout", function () {
          div.style("display", "none");
        })
        .on("click", function () {
          window.location.href = station.url;
        })
    });
  });
};

Map.prototype._redraw = function () {
  this.g
    .attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
};

Map.prototype._getMapSize = function () {
  var $map = this.$el;
  return [
    parseInt($map.width()),
    parseInt($map.height())
  ];
};

Map.prototype._setMapSize = function () {
  var size = this._getMapSize();
  d3.select("svg")
    .attr('width', size[0])
    .attr('height', size[1]);
};


new Map($('.js-map'));