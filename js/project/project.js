
  /**
   *  Project page javascript
   */

  $(function(){
  
    var Project = Backbone.View.extend({
      
      initialize: function() {
        _.bindAll(this, '_renderProject');
        
        this._initViews();

        // Fetch xavijam
        this.model = new User();
        this.model.fetch({ success: this._renderProject });
      },

      _initBinds: function() {},

      _initViews: function() {
        // Columnize for articles in IE
        if (!Modernizr.csscolumns) {
          this.$('.entry-content div.columns, .page-content div.columns')
            .parent()
            .columnize({
              lastNeverTallest: true
            });
        }
      },

      _renderProject: function(m) {
        var current_title = this.$('h2.page-title').text();
        var collection = m.get('milestones').filter(function(p) {
          return p.get('preview') && p.get('title') !== current_title
        });

        if (collection.length > 0) {
          var project_model = collection[Math.floor(Math.random() * collection.length)];
          var project_item = new ProjectItem({ model: project_model, tagName: 'div' });
          this.$('article.project .page-content').append(project_item.render().el);
        }
      }

    });

    window.app = new Project({
      el: document.body
    });

  });