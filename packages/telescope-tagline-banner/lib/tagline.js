heroModules.push({
  template: 'taglineBanner',
  order: 0
});

var showTaglineBanner = {
  propertyName: 'showTaglineBanner',
  propertySchema: {
    type: Boolean,
    optional: true,
    label: '标语banner',
    autoform: {
      group: 'general',
      instructions: '在首页显示标语'
    }
  }
}
addToSettingsSchema.push(showTaglineBanner);