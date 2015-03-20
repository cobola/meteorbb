# MeteorBB 中文Meteor社区

MeteorBB 是基于[Telescope](https://github.com/TelescopeJS/Telescope)二次开发的中文Meteor社区。

## Telescope介绍

Telescope是用Meteor.js开发的消息社区，使用Meteor开发，更多的信息可以访问[Telescope官网](http://www.telescopeapp.org/)以及[Telescope的Github主页](https://github.com/TelescopeJS/Telescope)。

为了方便大家参与二次开发，有必要介绍下Telescope。下文为根据Telescope文档中的内容翻译。

### 欢迎使用Telescope!

如果你正在阅读这个文章，说明你已经成功运行了Telescope。为了让你在第一次使用Telescope时，感觉更加真实，我们在你的app中加入了模板文章，你可以按照下面介绍的方法，清除这些文章。

### 1. 创建一个账户

首先，你需要创建一个账号，这会是这个app中的第一个账户，它会自动授予管理员权限，这样你就可以使用Telescope的配置面板了。在顶部点击“Register”菜单，当你完成注册后，回到这里继续读下面的文章。

### 2. 配置

接下来，你可以进行一些基本的配置，例如网站的标题，logo和使用的语言。你可以在任何时候自由配置这些信息。只要选择“Admin”菜单中“Settings”就可以进行配置了。

#### 2.1 改变颜色

Telescope 是一个非常灵活性的框架，你可以在[Settings](/settings)自由配置header和按钮的颜色。

#### 2.2 启用 Thumbnails

如果你需要，你也可以使用Thumbnails。首先，你需要获得一个 [Embedly](http://embed.ly)的API key，然后将它添加到配置界面。

#### 2.3 启用 Newsletter

Telescope能够自动的收集并发送每天或者每周最好的文章。获得这个功能仅仅需要你在配置界面输入MailChimp API和 list ID，选择一个推送频率，然后激活newsletter。

如果想知道更多的关于newsletter的信息，可以查阅文档中的[Email](http://www.telesc.pe/docs/packages/email/)内容。

#### 2.4 配置你的模板

Telescope能够支持使用用户自己的html模板来覆盖当前app的任何部分，查阅[the documentation](http://www.telesc.pe/docs/customizing/theming-telescope/)获取更多的信息。

### 3. 发表文章

现在你已经配置好了，可以开始使用Telescope了。你可以查看所有的文章，也可以自己发表文章。

### 4. 清除预先导入的文章

如果你已经安装好了Telescope，就可以删掉这些初始化的帖子了，只用一个命令就可以了。

首先登陆，然后打开浏览器的 [browser console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers) 敲入:

```js
Meteor.call('removeGettingStartedContent');
```

### 5. 问题去哪儿？

在使用或者开发中，可以在以下场所中提问。

#### 5.1 Stack Overflow

如果你需要一些Telescope帮助，[Stack Overflow](http://stackoverflow.com/questions/tagged/telescope)是最好的提问题场所。你仅仅需要确认你的问题使用了`telescope`标签。

#### 5.2 Telescope Meta

如果你仅仅是想讨论一些Telescope的特性，或者展示你用Telescope做的app，你可以在[Telescope Meta](http://meta.telesc.pe)创建一个讨论主题。

#### 5.3 GitHub Issues

如果你找到一个Telescope的Bug，你可以在Github上[留下你一个issue](https://github.com/TelescopeJS/Telescope/issues).

### 6. 产品部署

Meteor的产品部署可以使用**快速开发部署**和**成熟产品部署**两种模式。

#### 6.1 快速开发部署

一旦你已经开始使用Telescope，你可能会想开发一个全世界都能访问的，属于你的app。你能够很轻松的使用Meteor提供的免费主机服务来实现你的这个想法。现在打开你的终端，进入到Telescope的目录，输入：
```
meteor deploy my-app
```

`my-app`是你为你的Telescope app取的独一无二的名字，你的app将被发布并部署到`http://my-app.meteor.com`。

你需要创建一个Meteor账号，跟着官网的提示就行了。

值得注意的是，这次部署**不会**拷贝你本地里含有文章和配置信息的数据库，所以你需要分别单独配置这些数据在你的远程Telescope主机上。

#### 6.2 成熟产品部署

在`*.meteor.com`上部署小的或者原型app是个不错的选择，但是如果你的app是一个成熟的产品，你需要一些更好方案来部署。可以参考[the Telescope documentation](http://www.telesc.pe/docs/getting-started/deploying/)来了解更多的这方面的主题。

## 需知

MeteorBB尚处于开发过程，欢迎感兴趣的朋友一同参与，任何建议和问题可以在[issues](https://github.com/cobola/meteorbb/issues)中提出


## demo <http://www.meteorbb.com>



#License

"THE COFFE-WARE LICENSE" (Revision 43):

As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a cup of coffe in return.
