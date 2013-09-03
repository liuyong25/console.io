/**
 * Created with IntelliJ IDEA.
 * User: nisheeth
 * Date: 27/08/13
 * Time: 12:17
 * Email: nisheeth.k.kashyap@gmail.com
 * Repositories: https://github.com/nkashyap
 */

ConsoleIO.namespace("ConsoleIO.Constant.THEMES");
ConsoleIO.namespace("ConsoleIO.Constant.IMAGE_URL");
ConsoleIO.namespace("ConsoleIO.Constant.ICONS");

ConsoleIO.Constant.THEMES = {
    'web': {
        layout: 'dhx_skyblue',
        grid: 'dhx_skyblue',
        win: 'dhx_skyblue'
    },
    'terrace': {
        layout: 'dhx_terrace',
        grid: 'dhx_terrace',
        win: 'dhx_terrace'
    },
    get: function get(type) {
        return ConsoleIO.Constant.THEMES[ConsoleIO.Settings.theme][type];
    }
};

ConsoleIO.Constant.IMAGE_URL = {
    'web': {
        tree: "resources/lib/dhtmlx/web/imgs/csh_vista/",
        tab: "resources/lib/dhtmlx/web/imgs/",
        win: "resources/lib/dhtmlx/web/imgs/",
        grid: "resources/lib/dhtmlx/web/imgs/"
    },
    'terrace': {
        tree: "resources/lib/dhtmlx/terrace/imgs/csh_dhx_terrace/",
        tab: "resources/lib/dhtmlx/terrace/imgs/",
        win: "resources/lib/dhtmlx/terrace/imgs/",
        grid: "resources/lib/dhtmlx/terrace/imgs/"
    },
    get: function get(type) {
        return ConsoleIO.Constant.IMAGE_URL[ConsoleIO.Settings.theme][type];
    }
};

ConsoleIO.Constant.ICONS = {
    ONLINE: 'online.png',
    OFFLINE: 'offline.png',
    SUBSCRIBE: 'subscribe.gif',
    VERSION: 'version.gif',

    //Platform icons
    PC: 'pc.png',
    TV: 'tv.jpg',
    STB: 'stb.png',
    MOBILE: 'mobile.png',
    TABLET: 'tablet.png',
    MEDIA: 'media.png',
    BLUERAY: 'blueray.png',
    CONSOLE: 'playstation.png',

    //Manufacturers icons
    LG: 'lg.png',
    PHILIPS: 'philips.jpg',
    SAMSUNG: 'samsung.jpg',
    TOSHIBA: 'toshiba.png',
    TESCO: 'tesco.jpg',
    SONY: 'sony.jpg',
    PANASONIC: 'panasonic.gif',
    MICROSOFT: 'microsoft.png',
    MOZILLA: 'mozilla.png',
    GOOGLE: 'google.png',
    APPLE: 'apple.png',
    ANDROID: 'android.png',
    "OPERA SOFTWARE": 'opera.png',

    //Browser icons
    GINGERBREAD: 'gingerbread.jpg',
    CHROME: 'chrome.png',
    IE: 'explorer.png',
    FIREFOX: 'firefox.png',
    OPERA: 'opera.png',
    SAFARI: 'safari.png',
    MAPLE: 'maple.gif',
    NETTV: 'nettv.png',
    NETCAST: 'netcast.gif',
    TOSHIBATP: 'toshibatp.png',
    ESPIAL: 'espial.png',
    MSTAR: 'mstar.png',
    VIERA: 'viera.png',
    //"OREGAN MEDIA": '',
    PLAYSTATION: 'playstation.png',

    JAVASCRIPT: 'javascript.gif',
    STYLESHEET: 'stylesheet.gif',
    WEB: 'web.png',
    FILE: '',
    UNKNOWN: 'unknown.png',
    FOLDEROPEN: '../../' + ConsoleIO.Constant.IMAGE_URL.get('tree') + '/folderOpen.gif'
};