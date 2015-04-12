App.info({
    id: 'com.meteorbb.client',
    name: 'MeteorBB',
    description: 'No Meteor , No BB',
    author: 'cobola',
    email: 'cobola@gmail.com',
    website: 'http://www.meteorbb.com',
    version: '0.0.1'
});

App.icons({
    // iOS
    'iphone': 'resources/icons/icon-60.png',
    'iphone_2x': 'resources/icons/icon-60@2x.png',
    'ipad': 'resources/icons/icon-72.png',
    'ipad_2x': 'resources/icons/icon-72@2x.png',

    // Android
    'android_ldpi': 'resources/icons/drawable-ldpi-icon.png',
    'android_mdpi': 'resources/icons/drawable-mdpi-icon.png',
    'android_hdpi': 'resources/icons/drawable-hdpi-icon.png',
    'android_xhdpi': 'resources/icons/drawable-xhdpi-icon.png'

});

App.launchScreens({
    // iOS
    'iphone': 'resources/splash/Default~iphone.png',
    'iphone_2x': 'resources/splash/Default@2x~iphone.png',
    'iphone5': 'resources/splash/Default-568h@2x~iphone.png',
    'ipad_portrait': 'resources/splash/Default-Portrait~ipad.png',
    'ipad_portrait_2x': 'resources/splash/Default-Portrait@2x~ipad.png',
    'ipad_landscape': 'resources/splash/Default-Landscape~ipad.png',
    'ipad_landscape_2x': 'resources/splash/Default-Landscape@2x~ipad.png',

    // Android
    'android_ldpi_portrait': 'resources/splash/drawable-port-ldpi-screen.png',
    'android_ldpi_landscape': 'resources/splash/drawable-land-ldpi-screen.png',
    'android_mdpi_portrait': 'resources/splash/drawable-port-mdpi-screen.png',
    'android_mdpi_landscape': 'resources/splash/drawable-land-mdpi-screen.png',
    'android_hdpi_portrait': 'resources/splash/drawable-port-hdpi-screen.png',
    'android_hdpi_landscape': 'resources/splash/drawable-land-hdpi-screen.png',
    'android_xhdpi_portrait': 'resources/splash/drawable-port-xhdpi-screen.png',
    'android_xhdpi_landscape': 'resources/splash/drawable-land-xhdpi-screen.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

