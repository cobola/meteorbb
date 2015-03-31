Package.describe({summary: "Telescope API package"});

Package.onUse(function (api) {

  api.use(['meteorbb-base', 'telescope-lib'], ['server']);

  api.add_files(['lib/server/api.js', 'lib/server/routes.js'], ['server']);

  api.export(['serveAPI']);

});