
  /**
   *  Main javascript
   */

  $(function(){
  
    var App = Backbone.View.extend({
      
      initialize: function() {
        this._initBinds();
        this._initViews();
      },

      _initBinds: function() {
        // Bind normal buttons
        this.$('button.ladda-button').each(function(i,el) {
          Ladda.bind( el, {
            timeout: 3000,
            callback: function() {
              setTimeout(function() {
                var href = $(el).attr('data-href');
                if (href) {
                  window.location = href;
                }
              },150)
            }
          });  
        })
        
      },

      _initViews: function() {
        // Columnize for articles in IE
        if (!Modernizr.csscolumns) {
          this.$('.entry-content div.columns, .page-content div.columns')
            .parent()
            .columnize({
              lastNeverTallest: true
            });
        }
      }

    });

    window.app = new App({
      el: document.body
    });

  });