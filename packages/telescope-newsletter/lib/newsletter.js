campaignSchema = new SimpleSchema({
 _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  sentAt: {
    type: String,
    optional: true
  },
  status: {
    type: String,
    optional: true
  },
  posts: {
    type: [String],
    optional: true
  },
  webHits: {
    type: Number,
    optional: true
  },
});

Campaigns = new Meteor.Collection("campaigns", {
  schema: campaignSchema
});

addToPostSchema.push(
  {
    propertyName: 'scheduledAt',
    propertySchema: {
      type: Date,
      optional: true,
      autoform: {
        omit: true
      }
    }
  }
);

// Settings

var enableNewsletter = {
  propertyName: 'enableNewsletter',
  propertySchema: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'newsletter',
      instructions: '是否开通简讯 (需要重启).'
    }
  }
}
addToSettingsSchema.push(enableNewsletter);

var showBanner = {
  propertyName: 'showBanner',
  propertySchema: {
    type: Boolean,
    optional: true,
    label: '简讯标识',
    autoform: {
      group: 'newsletter',
      instructions: '在首页显示简讯标识报名表单'
    }
  }
}
addToSettingsSchema.push(showBanner);

var mailChimpAPIKey = {
  propertyName: 'mailChimpAPIKey',
  propertySchema: {
    type: String,
    optional: true,
    autoform: {
      group: 'newsletter',
      private: true
    }
  }
}
addToSettingsSchema.push(mailChimpAPIKey);

var mailChimpListId = {
  propertyName: 'mailChimpListId',
  propertySchema: {
    type: String,
    optional: true,
    autoform: {
      group: 'newsletter',
      instructions: '你想要发送到的列表ID',
      private: true
    }
  }
}
addToSettingsSchema.push(mailChimpListId);

var postsPerNewsletter = {
  propertyName: 'postsPerNewsletter',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'newsletter'
    }
  }
}
addToSettingsSchema.push(postsPerNewsletter);

var newsletterFrequency = {
  propertyName: 'newsletterFrequency',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'newsletter',
      instructions: '默认每周一次. 更改后需要重启应用生效。',
      options: [
        {
          value: 1,
          label: '每天'
        },
        {
          value: 2,
          label: '每周一、三、五'
        },
        {
          value: 3,
          label: '周一、二'
        },
        {
          value: 7,
          label: '每周一次（周一）'
        }
      ]
    }
  }
}
addToSettingsSchema.push(newsletterFrequency);

var newsletterTime = {
  propertyName: 'newsletterTime',
  propertySchema: {
    type: String,
    optional: true,
    defaultValue: '00:00',
    autoform: {
      group: 'newsletter',
      instructions: '默认 00:00/12:00 上午， 如果开通简讯则在此时间推送。',
      type: 'time'
    }
  }
}
addToSettingsSchema.push(newsletterTime);

var autoSubscribe = {
  propertyName: 'autoSubscribe',
  propertySchema: {
    type: Boolean,
    optional: true,
    autoform: {
      group: 'newsletter',
      instructions: '新用户注册后自动订阅.'
    }
  }
}
addToSettingsSchema.push(autoSubscribe);

// create new "campaign" lens for all posts from the past X days that haven't been scheduled yet
viewParameters.campaign = function (terms) {
  return {
    find: {
      scheduledAt: {$exists: false},
      postedAt: {
        $gte: terms.after
      }
    },
    options: {sort: {sticky: -1, score: -1}}
  };
}

heroModules.push({
  template: 'newsletterBanner'
});

 function subscribeUserOnCreation (user) {
  if (!!getSetting('autoSubscribe') && !!getEmail(user)) {
    addToMailChimpList(user, false, function (error, result) {
      console.log(error)
      console.log(result)
    });
  }
  return user;
}
userCreatedCallbacks.push(subscribeUserOnCreation);
