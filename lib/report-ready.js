"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isRenderer = function () {
    // running in a web browser
    if (typeof process === 'undefined')
        return false;
    // node-integration is disabled
    if (!process)
        return false;
    // We're in node.js somehow
    if (!process['type'])
        return false;
    return process['type'] === 'renderer';
};
var ipc = null;
if (isRenderer()) {
    ipc = window['require']('electron').ipcRenderer;
}
exports.reportReady = function () { return ipc && ipc.send('ready'); };
//# sourceMappingURL=report-ready.js.map