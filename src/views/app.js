var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.firstSearch);
    this.videos.search('Hack Reactor');
    this.render();
  },

  firstSearch: function() {
    this.videos.at(0).select();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template);

    // render the player
    new VideoPlayerView ({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    // render the videos list
    new VideoListView ({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    // render the search view
    new SearchView ({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')
});

