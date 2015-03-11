// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Lists.find().count() === 0) {
        var data = [
            {
                name: "系统节点",
                items: ["测试帖子"]
            },
            {
                name: "测试节点",
                items: []
            }];

        var timestamp = (new Date()).getTime();
        _.each(data, function (list) {
            var list_id = Lists.insert({
                name: list.name,
                incompleteCount: list.items.length
            });

            _.each(list.items, function (text) {
                Board.insert({
                    listId: list_id,
                    text: text,
                    createdAt: new Date(timestamp)
                });
                timestamp += 1; // ensure unique timestamp.
            });
        });
    }
});
