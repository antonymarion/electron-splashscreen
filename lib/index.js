var electron_1 = require('electron');
var report_ready_1 = require('./report-ready');
exports.reportReady = report_ready_1.default;
var office_1 = require('./templates/office');
exports.Office = office_1.default;
var dolphin_1 = require('./templates/dolphin');
exports.Dolphin = dolphin_1.default;
var simple_1 = require('./templates/simple');
exports.Simple = simple_1.default;
exports.initSplashScreen = function (_a) {
    var mainWindow = _a.mainWindow, color = _a.color, icon = _a.icon, _b = _a.width, width = _b === void 0 ? 600 : _b, _c = _a.height, height = _c === void 0 ? 400 : _c, url = _a.url, image = _a.image, brand = _a.brand, productName = _a.productName, logo = _a.logo, website = _a.website, text = _a.text, backgroundColor = _a.backgroundColor;
    var col = color ||
        (electron_1.systemPreferences.getAccentColor &&
            "#" + electron_1.systemPreferences.getAccentColor());
    global['splashScreenImage'] = image || icon;
    var splashScreen = new electron_1.BrowserWindow({
        width: width,
        height: height,
        parent: mainWindow,
        modal: true,
        transparent: true,
        skipTaskbar: true,
        frame: false,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        resizable: false,
        movable: false,
        icon: icon,
        backgroundColor: backgroundColor
    });
    var args = {
        brand: brand,
        productName: productName,
        logo: logo,
        website: website,
        color: col,
        text: text
    };
    if (typeof url === 'function') {
        var file = 'data:text/html;charset=UTF-8,' + encodeURIComponent(url(args));
        splashScreen.loadURL(file);
    }
    else {
        splashScreen.loadURL(url + '#' + Buffer.from(JSON.stringify(args)).toString());
    }
    splashScreen.show();
    var hide = function () {
        setTimeout(function () { return splashScreen.destroy(); }, 2500);
        mainWindow.show();
    };
    hide();
};
//# sourceMappingURL=index.js.map