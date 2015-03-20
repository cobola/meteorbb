Package.describe({summary: "Telescope base theme"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'meteorbb-base', 'fourseven:scss'], ['client', 'server']);

  api.addFiles(
    [
      // global

      // includes
      'lib/client/scss/includes/_breakpoints.scss',
      'lib/client/scss/includes/_colors.scss',
      'lib/client/scss/includes/_mixins.scss',


      // specific
      'lib/client/scss/specific/_avatars.scss',
      'lib/client/scss/specific/_errors.scss',
      'lib/client/scss/specific/_header.scss',
      'lib/client/scss/specific/_loading.scss',
      'lib/client/scss/specific/_notifications.scss',
      'lib/client/scss/specific/_posts.scss',
      'lib/client/scss/specific/_users.scss',

      // screen
      'lib/client/scss/screen.scss'
    ],
    'client'
  );

});