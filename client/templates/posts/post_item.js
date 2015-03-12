Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },

  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  },
  avator:function(){
    //var email ;
    var email = Meteor.user().emails[0].address;
    var options = {
      secure: true // choose between `http://www.gravatar.com`
                   //            and `https://secure.gravatar.com`
                   //            default is `false`
    };


    return  Gravatar.imageUrl(email, options);
  }
});

Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});