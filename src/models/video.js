/*
  App view
    top section
      search view
        search bar => single search bar

    left content area
      video player view
        video player => single player

    right content area
      video list view
        videoListEntry => multiple entries
*/


var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});