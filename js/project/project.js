
  /**
   *  Project page javascript
   */

  $(function(){
  
    var Project = Backbone.View.extend({
      
      initialize: function() {
        _.bindAll(this, '_renderProject', '_setPrevNext');
        
        this._initViews();

        // Fetch xavijam
        var self = this;
        this.model = new User();
        this.model.fetch({
          success: function() {
            self._setPrevNext()
            self._renderProject()
          }
        });
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

      _setPrevNext: function() {
        var current_title = this.$('h2.page-title').text();
        var col = this.model.get('milestones');
        var mod = col.find(function(m) { return m.get('title') == current_title });
        var pos = col.indexOf(mod);

        if (!mod || !pos) return false;

        // Prev
        var prev;
        if (pos >= (col.size() - 1) ) {
          prev = col.at(0);
        } else {
          prev = col.at(pos + 1);
        }
        this.$('.projects-navigation .prev')
          .attr('href', prev.get('url'))
          .find('span').text(prev.get('title'))

        // Next
        var next;
        if (pos == 0) {
          next = col.at(col.size() - 1);
        } else {
          next = col.at(pos - 1);
        }
        this.$('.projects-navigation .next')
          .attr('href', next.get('url'))
          .find('span').text(next.get('title'))
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