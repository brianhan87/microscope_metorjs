Posts = new Meteor.Collection('posts');

// To Var Or Not To Var?
// In Meteor, 
// the var keyword limits the scope of an object to the current file. 
// We want to make the Posts collection available to our whole app, 
// which is why we're omitting that keyword here.