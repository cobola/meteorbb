Template.commentItem.helpers({
  updatedText: function() {
    //console.log(a);
    return moment(this.updated).fromNow();
  }
});