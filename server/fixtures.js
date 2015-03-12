// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var tomId = Meteor.users.insert({
    username:'meteorbb'
  });
  var cobola = Meteor.users.findOne(tomId);


  var telescopeId = Posts.insert({
    title: 'Meteor 是个好东西',
    author: cobola,
    content: 'Meteor 是个好东西 欢迎访问 www.meteorbb.com',
    updated: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    author: cobola,
    updated: new Date(now - 5 * 3600 * 1000),
    body: '是的 buddy'
  });



  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: '测试 post #' + i,
      author: cobola,
      content: '我知道你知道你不知道我知道你知道' + i,
      updated: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}