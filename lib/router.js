Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

// we've also added a waitOn function, 
// which returns our posts subscription. 
// What this means is that the router will ensure that the posts subscription 
// is loaded before sending the user through to the route they requested.

// Note that since we're defining our waitOn function globally at the router level, 
// this sequence will only happen once when a user first accesses your app. 
// After that, the data will already be loaded in the browser's memory 
// and the router won't need to wait for it again.

Router.map(function() {
  this.route('postsList', {path: '/'});
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else  
      this.render('accessDenied');
    this.stop();
  }
}

Router.before(requireLogin, { only: 'postSubmit' });