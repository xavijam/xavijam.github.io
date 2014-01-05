
  /**
   *  Project item view
   *
   *  - It shows title, description and the
   *  preview animation if it was defined.
   */
  
  ProjectItem = Backbone.View.extend({
    
    tagName:        'div',
    className:      'project-item',
    template_name:  'project_item',

    options: {
      pos: 0
    },

    initialize: function() {
      _.bindAll(this, '_setInfoPadding');
      this.template =  JST["projects/templates/" + this.template_name];
    },

    render: function() {
      var m = this.model.toJSON();
      if (m.date) m.date = moment(m.date).format("MMMM D, YYYY");
      m.pos = this.options.pos;
      
      this.$el.html(this.template(m));

      // Preview animation ?
      if (m.preview) {
        var preview = new (eval(m.preview))();
        this.$('.preview .l-box').html(preview.render().el);

        // Set same height for both blocks
        setTimeout(this._setInfoPadding,10);
      }

      return this;
    },

    _setInfoPadding: function() {
      var pad = this.$('.preview').height() - this.$('.info').height();
      this.$('.info').css({
        'padding-top': pad + 'px'
      })
    }
  })