Lists = new Meteor.Collection('lists');

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function () {
    var nextLetter = 'A', nextName = 'List ' + nextLetter;
    while (Lists.findOne({name: nextName})) {
        // not going to be too smart here, can go past Z
        nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
        nextName = 'List ' + nextLetter;
    }

    return nextName;
};

Todos = new Meteor.Collection('todos');

// 每个节点 就是一个版面 版面本身可以
Board = new Meteor.Collection('Board');

Board.allow({
    insert: function (userId, doc) {
        // 只允许登录用户添加帖子
        return !!userId;
    }
});

// 一个帖子
Post = new Meteor.Collection('Post');

Post.allow({
    insert: function (userId, doc) {
        // 只允许登录用户添加帖子
        return !!userId;
    }
});

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Post.insert(post);
        return {
            _id: postId
        };
    }
});

// 一个回复
Reply = new Meteor.Collection('Reply');

