
  /**
   *
   */

  User = Backbone.Model.extend({

    defaults: {
      social:     {},
      info:       {},
      milestones: [],
      jobs:       []
    },

    url: function() {
      return '/assets/data/xavijam.json'
    },

    parse: function(r) {
      r.milestones = new Milestones(r.milestones);
      return r
    }

  })