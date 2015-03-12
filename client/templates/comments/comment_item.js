Template.commentItem.helpers({
  updatedText: function() {
    var a =moment(this.updated).fromNow();
    console.log(a);
    return a;
  }
});