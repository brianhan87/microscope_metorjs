Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

// Although this is not specific to Meteor, 
// here's a quick explanation of the above bit of “JavaScript magic”. 
// First, we're creating an empty anchor (a) HTML element and storing it in memory.

// We then set its href attribute to be equal to the current post's URL 
// (as we've just seen, in a helper this is the object currently being acted upon).

// Finally, we take advantage of that a element's special hostname property 
// to get back the link's domain name without the rest of the URL.