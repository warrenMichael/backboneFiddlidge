var Tweet = Backbone.Model.extend();

var Tweets = Backbone.Collection.extend({
    
    initialize: function () {
        this.tweeted = $('.tweets');
    },

    el: '.container',

    //events: {
    //},

    model: Tweet,
    //url: 'http://twitter.com/statuses/user_timeline/dgalarza.json?screen_name=aejcostanzo&callback=?',
    url: 'https://api.twitter.com/1/lists/statuses.json?slug=my-bromigos&owner_screen_name=therealmdub&include_rts=true&count=10&include_entities=true&callback=?',
    parse: function(response) {
        console.log(response)
        for (var i = 0; i < response.length; i++) {
          var status = response[i].text,
          name = response[i].user.name,
          thumbnail = response[i].user.profile_image_url;
          $(this.tweeted).append('<div class="tweet well clearfix"><img class="thumbnail" src=' + thumbnail + ' /><div class="status-copy"><h4>' + name + '</h4><p>' + status + '</p></div></div>');
        }
    },

});

var tweets = new Tweets();

tweets.fetch();