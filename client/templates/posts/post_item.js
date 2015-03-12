Template.postItem.helpers({
    ownPost: function () {
        return this.userId == Meteor.userId();
    },

    upvotedClass: function () {
        var userId = Meteor.userId();
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvotable';
        } else {
            return 'disabled';
        }
    },
    avatar: function () {
        //var email ;

        var email = '';
        if (this.author.emails) {
            email =this.author.emails[0].address;
        } else {
            return 'http://cobola.qiniudn.com/avatar.jpg';
        }
        var options = {
            secure: true // choose between `http://www.gravatar.com`
                         //            and `https://secure.gravatar.com`
                         //            default is `false`
        };

        return Gravatar.imageUrl(email, options);
    }
});

Template.postItem.events({
    'click .upvotable': function (e) {
        e.preventDefault();
        Meteor.call('upvote', this._id);
    }
});