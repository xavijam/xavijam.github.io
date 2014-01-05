
  /**
   *  Home javascript
   */

  $(function(){
  
    var Home = Backbone.View.extend({
      
      initialize: function() {
        this.model = new User();
        this._initBinds();
        this._initViews();

        // Fetch xavijam
        this.model.fetch();
      },

      _initBinds: function() {},

      _initViews: function() {
        var things = new MilestonesTimeline({
          model: this.model
        })

        this.$('.inner').append(things.render().el)
      }

    });

    window.home = new Home({
      el: document.body
    });

  });