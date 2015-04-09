settingsSchemaObject = {
  title: {
    type: String,
    optional: true,
    autoform: {
      group: 'general'
    }
  },
  siteUrl: {
    type: String,
    optional: true,
    autoform: {
      group: 'general'
    }
  },
  tagline: {
    type: String,
    optional: true,
    autoform: {
      group: 'general'
    }
  },
  description: {
    type: String,
    optional: true,
    autoform: {
      group: 'general',
      rows: 5
    }
  },
  requireViewInvite: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'invites'
    }
  },
  requirePostInvite: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'invites'
    }
  },
  requirePostsApproval: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'general',
      instructions: '必须由管理员审核后发表'
    }
  },
  defaultEmail: {
    type: String,
    optional: true,
    autoform: {
      group: 'email',
      instructions: '系统所有邮件都将从此邮箱发送',
      private: true
    }
  },
  mailUrl: {
    type: String,
    optional: true,
    autoform: {
      group: 'email',
      instructions: 'MAIL_URL 环境变量 需要设置 (需要重启).',
      private: true
    }
  },  
  scoreUpdateInterval: {
    type: Number,
    optional: true,
    defaultValue: 30,
    autoform: {
      group: 'scoring',
      instructions: '多长时间更新一次分数, 以秒计算 (默认 30秒)',
      private: true
    }
  },
  defaultView: {
    type: String,
    optional: true,
    autoform: {
      group: 'posts',
      instructions: '该视图被用于首页展示',
      options: _.map(viewsMenu, function (view) {
        return {
          value: camelCaseify(view.label),
          label: view.label
        };
      })
    }
  },
  postsLayout: {
    type: String,
    optional: true,
    autoform: {
      group: 'posts',
      instructions: '该布局被用于帖子列表展示',
      options: [
        {value: 'posts-list', label: 'List'},
        {value: 'posts-grid', label: 'Grid'}
      ]
    }
  },
  postInterval: {
    type: Number,
    optional: true,
    defaultValue: 30,
    autoform: {
      group: 'posts',
      instructions: '2次发帖时间间隔, 以秒为单位 (默认 30秒)'
    }
  },
  commentInterval: {
    type: Number,
    optional: true,
    defaultValue: 15,
    autoform: {
      group: 'comments',
      instructions: '2次评论时间间隔, 以秒为单位 (默认 15秒)'
    }
  },
  maxPostsPerDay: {
    type: Number,
    optional: true,
    defaultValue: 30,
    autoform: {
      group: 'posts',
      instructions: '用户一天最大发帖数 (默认 30条).'
    }
  },
  startInvitesCount: {
    type: Number,
    defaultValue: 3,
    optional: true,
    autoform: {
      group: 'invites'
    }
  },
  postsPerPage: {
    type: Number,
    defaultValue: 10,
    optional: true,
    autoform: {
      group: 'posts'
    }
  },
  logoUrl: {
    type: String,
    optional: true,
    autoform: {
      group: 'logo'
    }
  },
  logoHeight: {
    type: Number,
    optional: true,
    autoform: {
      group: 'logo'
    }
  },
  logoWidth: {
    type: Number,
    optional: true,
    autoform: {
      group: 'logo'
    }
  },
  faviconUrl: {
    type: String,
    optional: true,
    autoform: {
      group: 'logo'
    }
  },
  language: {
    type: String,
    defaultValue: 'zh-CN',
    optional: true,
    autoform: {
      group: 'general',
      instructions: '站点语言，默认是中文.',
      options: function () {
        var languages = _.map(TAPi18n.getLanguages(), function (item, key) {
          return {
            value: key,
            label: item.name
          }
        });
        return languages
      }
    }
  },
  backgroundCSS: {
    type: String,
    optional: true,
    autoform: {
      group: 'extras',
      instructions: 'CSS 样式代码加载到 <body> 标签的 "background" 属性',
      rows: 5
    }
  },
  // secondaryColor: {
  //   type: String,
  //   optional: true
  // },
  buttonColor: {
    type: String,
    optional: true,
    autoform: {
      group: 'colors',
      type: 'color'
    }
  },
  buttonTextColor: {
    type: String,
    optional: true,
    autoform: {
      group: 'colors'
      // type: 'color'
    }
  },
  headerColor: {
    type: String,
    optional: true,
    autoform: {
      group: 'colors'
       //type: 'color'
    }
  },
  fontUrl: {
    type: String,
    optional: true,
    autoform: {
      group: 'fonts',
      instructions: '例：@import URL (e.g. https://fonts.googleapis.com/css?family=Source+Sans+Pro)'
    }
  },
  fontFamily: {
    type: String,
    optional: true,
    autoform: {
      group: 'fonts',
      instructions: '例：font-family (e.g. "Source Sans Pro", sans-serif)'
    }
  },
  headerTextColor: {
    type: String,
    optional: true,
    autoform: {
      group: 'colors'
    }
  },
  twitterAccount: {
    type: String,
    optional: true,
    autoform: {
      group: 'integrations'
    }
  },
  googleAnalyticsId: {
    type: String,
    optional: true,
    autoform: {
      group: 'integrations'
    }
  },
  mixpanelId: {
    type: String,
    optional: true,
    autoform: {
      group: 'integrations'
    }
  },
  clickyId: {
    type: String,
    optional: true,
    autoform: {
      group: 'integrations'
    }
  },
  footerCode: {
    type: String,
    optional: true,
    autoform: {
      group: 'extras',
      instructions: '页面底部内容 (可以使用 Markdown 语言).',
      rows: 5
    }
  },
  extraCode: {
    type: String,
    optional: true,
    autoform: {
      group: 'extras',
      instructions: '任意一段HTML代码， 你可以引入到所有页面',
      rows: 5
    }
  },
  emailFooter: {
    type: String,
    optional: true,
    autoform: {
      group: 'email',
      instructions: '内容将出现在发送的邮件的底部（可以使用HTML）',
      rows: 5,
      private: true
    }
  },
  notes: {
    type: String,
    optional: true,
    autoform: {
      group: 'extras',
      instructions: '你可以在这里写任何注释或额外的信息',
      rows: 5,
      private: true
    }
  },
  debug: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'debug',
      instructions: '启用调试模式显示控制台信息的更多细节'
    }
  },
  authMethods: {
    type: [String],
    optional: true,
    autoform: {
      group: 'auth',
      editable: true,
      noselect: true,
      options: [
        {
          value: 'email',
          label: '邮箱/密码'
        },
        {
          value: 'twitter',
          label: 'Twitter'
        },
        {
          value: 'facebook',
          label: 'Facebook'
        }
      ],
      instructions: '认证方式 (默认邮箱认证)'
    }    
  }
};

// add any extra properties to settingsSchemaObject (provided by packages for example)
_.each(addToSettingsSchema, function(item){
  settingsSchemaObject[item.propertyName] = item.propertySchema;
});

Settings = new Meteor.Collection("settings");
SettingsSchema = new SimpleSchema(settingsSchemaObject);
Settings.attachSchema(SettingsSchema);

// use custom template for checkboxes - not working yet
// if(Meteor.isClient){
//   AutoForm.setDefaultTemplateForType('afCheckbox', 'settings');
// }

Settings.allow({
  insert: isAdminById,
  update: isAdminById,
  remove: isAdminById
});

if (Meteor.isClient){
  var query = Settings.find();
  var handle = query.observeChanges({
    added: function (id, fields) {
      if (fields.language)
        setLanguage(fields.language)
    },
    changed: function (id, fields) {
      if (fields.language)
        setLanguage(fields.language)
    }
  });
}

Meteor.startup(function () {
  // override Meteor.absoluteUrl() with URL provided in settings
  Meteor.absoluteUrl.defaultOptions.rootUrl = getSetting('siteUrl', Meteor.absoluteUrl());
  debug = getSetting('debug', false);
});