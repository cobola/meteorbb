// do this better:
setLanguage = function (language) {
  // Session.set('i18nReady', false);

  // moment
  Session.set('momentReady', false);
  // console.log('moment loading…')
  if (language.toLowerCase() === "en") {
    Session.set('momentReady', true);
  } else {
    //$.getScript("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/lang/" + language.toLowerCase() + ".js", function (result) {
      moment.locale(language.toLowerCase(),{
        meridiem : function (hour, minute, isLowercase) {
          if (hour < 9) {
            return "早上";
          } else if (hour < 11 && minute < 30) {
            return "上午";
          } else if (hour < 13 && minute < 30) {
            return "中午";
          } else if (hour < 18) {
            return "下午";
          } else {
            return "晚上";
          }
        },
        relativeTime : {
          future: "在 %s",
          past:   "%s前",
          s:  "刚刚",
          m:  "一分钟",
          mm: "%d 分钟",
          h:  "一小时",
          hh: "%d 小时",
          d:  "一天",
          dd: "%d 天",
          M:  "一个月",
          MM: "%d 月",
          y:  "一年",
          yy: "%d 年"
        }
      });
      Session.set('momentReady', true);
      Session.set('momentLocale', language.toLowerCase());
      // console.log('moment loaded!')
    //});
  }

  // TAPi18n
  Session.set("TAPi18nReady", false);
  // console.log('TAPi18n loading…')
  TAPi18n.setLanguage(language)
    .done(function () {
      Session.set("TAPi18nReady", true);
      // console.log('TAPi18n loaded!')
    });

  // T9n
  T9n.setLanguage(language);
}

i18n = {
  t: function (str, options) {
    if (Meteor.isServer) {
      return TAPi18n.__(str, options, getSetting('language', 'zh-CN'));
    } else {
      return TAPi18n.__(str, options); 
    }
  }
};

Meteor.startup(function () {
  
  if (Meteor.isClient) {

    // doesn't quite work yet
    // Tracker.autorun(function (c) {
    //   console.log('momentReady',Session.get('momentReady'))
    //   console.log('i18nReady',Session.get('i18nReady'))
    //   var ready = Session.get('momentReady') && Session.get('i18nReady');
    //   if (ready) {
    //     Session.set('i18nReady', true);
    //     Session.set('locale', language);
    //     console.log('i18n ready! '+language)
    //   }
    // });

    setLanguage(getSetting('language', 'zh-CN'));
  }

});
