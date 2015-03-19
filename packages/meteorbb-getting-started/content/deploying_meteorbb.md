### Quick Deploy

Once you've played around with Telescope, you might want to deploy your app for the whole world to see.

You can do so easily using Meteor's own free hosting service. Just open a terminal window, go to your Telescope app's directory, and type:

```
meteor deploy my-app
```

Where `my-app` is a unique name you'll pick for your Telescope app. It will then be deployed to `http://my-app.meteor.com`. 

You might need to create a Meteor account first. Just follow the instructions!

Note that deploying does *not* copy over your database, which contains your posts and settings. So you'll need to configure them separately on your remote Telescope instance.

### Deploying For Production

Hosting on `*.meteor.com` is fine for small apps and prototypes, but if you want to deploy your app in production you'll need something better. 

Check out [the Telescope documentation](http://www.telesc.pe/docs/getting-started/deploying/) to learn more about this topic.

### 快速开发
一旦你已经开始使用Telescope，你可能会想开发一个全世界都能访问的，属于你的app。你能够很轻松的使用Meteor提供的免费主机服务来实现你的这个想法。现在打开你的终端，进入到Telescope的目录，输入：
```
meteor deploy my-app
```

`my-app`是你为你的Telescope app取的独一无二的名字，你的app将被发布并部署到`http://my-app.meteor.com`。

你需要创建一个Meteor账号，跟着官网的提示就行了。

值得注意的是，这次部署**不会**拷贝你本地里含有文章和配置信息的数据库，所以你需要分别单独配置这些数据在你的远程Telescope主机上。


### 为成熟产品开发

在`*.meteor.com`上部署小的或者原型app是个不错的选择，但是如果你的app是一个成熟的产品，你需要一些更好方案来部署。可以参考[the Telescope documentation](http://www.telesc.pe/docs/getting-started/deploying/)来了解更多的这方面的主题。
