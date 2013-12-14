Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});

// This function uses jQuery to parse out the values of our various form fields, 
// and populate a new post object from the results. 
// We need to ensure we preventDefault on the event argument 
// to our handler to make sure the browser doesn't go ahead and 
// try to submit the form.