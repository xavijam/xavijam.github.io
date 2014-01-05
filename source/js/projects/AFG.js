
  var AFG = Backbone.View.extend({
    
    className: 'AFG',
    tagName: 'div',

    options: {
      mapRatio: 0.5,
      maxScale: 4,
      minScale: 1
    },

    initialize: function() {
      _.bindAll(this, '_initMap', '_getMapSize', '_redraw');
      this.template = JST["projects/templates/AFG"];
    },

    render: function() {
      this.$el.html(this.template());
      setTimeout(this._initMap, 100);
      return this;
    },

    _initMap: function() {
      var self = this;
      // this.$map = this.$('#AFG_map');
      
      var size = this._getMapSize();
      this.projection = d3.geo.orthographic()
        .rotate([0, 90])
        .scale(160)
        .translate([size[0] / 2, size[1] / 2])
        .precision(.1)
        .clipAngle(90);

      this.path = d3.geo.path()
        .projection(this.projection);

      if (!('ontouchstart' in window) ||
        (navigator.maxTouchPoints === 0) ||
        (navigator.msMaxTouchPoints === 0)) {
        this.zoom = d3.behavior.zoom()
          .scaleExtent([this.options.minScale, this.options.maxScale])
          .on("zoom", this._redraw);
      }  

      this.svg = d3.select('#AFG_map').append("svg")
        .attr("width", size[0])
        .attr("height", size[1])
        .call(this.zoom)
        .append("g");

      this.svg.append("path")
        .datum(d3.geo.graticule())
        .attr("d", this.path)
        .attr("class", "graticule");

      this.svg.append("path")
        .attr("class", "antarctica");
        

      d3.json("/assets/data/antarctica_topojson.json", function(e, topology) {
        d3.select("path.antarctica")
          .datum(topojson.feature(topology, topology.objects.antartide))
          .attr("d", self.path);  
      });

      d3.csv("/assets/data/antarctica_stations.csv", function(e, stations) {
        _.each(stations, function(station) {
          self.svg.append('circle')
            .attr("cx", function(d) {
              return self.projection([station.longitude, station.latitude])[0];
            })
            .attr("cy", function(d) {
              return self.projection([station.longitude, station.latitude])[1];
            })
            .attr("class", "station")
            .attr("r", 2)
        })
        
      });
    },

    _redraw: function() {
      this.svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    },

    _getMapSize: function() {
      var $map = this.$('#AFG_map');
      return [
        parseInt($map.width()),
        parseInt($map.height())
      ]
    }

  })
