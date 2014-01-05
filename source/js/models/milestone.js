
  /**
   *  Milestone model 
   *
   */

  Milestone = Backbone.Model.extend({
    
    defaults: {
      title:    "",
      excerpt:  "",
      date:     "",
      url:      "",
      by:       ['xavijam'],
      link:     "",
      type:     "",
      preview:  ""
    }

  });


  /**
   *  Milestones collection 
   *
   */

  Milestones = Backbone.Collection.extend({

    model: Milestone,

    comparator: function(m) {
      return -new Date(m.get('date')).getTime();
    }

  });