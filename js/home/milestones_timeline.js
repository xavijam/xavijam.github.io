
  /**
   *  Home timeline
   *
   *  - Render all important milestones. 
   */

  MilestonesTimeline = Backbone.View.extend({

    tagName: 'ul',
    className: 'timeline',

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      if (this.model.get('milestones').length == 0) return this;

      var self = this;
      this.$el.html('');
      
      // Milestones
      this.model.get('milestones').each(function(m, i){
        var view = new ProjectItem({ model: m, pos: i });
        self.$el.append(view.render().el);
        m.bind('remove', view.remove);
      });

      return this;
    }

  });