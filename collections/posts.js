Posts = new Meteor.Collection('posts');

// To Var Or Not To Var?
// In Meteor, 
// the var keyword limits the scope of an object to the current file. 
// We want to make the Posts collection available to our whole app, 
// which is why we're omitting that keyword here.

Posts.allow({
  insert: function(userId, doc) {
    // only allow positing if you are logged in 
    return !! userId;
  }
});