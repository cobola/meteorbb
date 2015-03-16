### 清除所有帖子

如果你已经安装好了MeteorBB，就可以删掉这些初始化的帖子了，只用一个命令就可以了



首先登陆，然后打开浏览器的 [browser console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers) 敲入:

```js
Meteor.call('removeGettingStartedContent');
```
收工！