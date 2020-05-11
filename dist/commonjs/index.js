"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./draggable"));
__export(require("./dropzone"));
__export(require("./interact-draggable"));
__export(require("./interact-dropzone"));
__export(require("./interact-gesturable"));
__export(require("./interact-resizable"));
__export(require("./resizable"));
var Interact = require("interactjs");
var aurelia_pal_1 = require("aurelia-pal");
function configure(aurelia, options) {
    aurelia.container.registerInstance(Interact, Interact);
    var attributes = [
        aurelia_pal_1.PLATFORM.moduleName('./interact-draggable'),
        aurelia_pal_1.PLATFORM.moduleName('./interact-dropzone'),
        aurelia_pal_1.PLATFORM.moduleName('./interact-gesturable'),
        aurelia_pal_1.PLATFORM.moduleName('./interact-resizable'),
        aurelia_pal_1.PLATFORM.moduleName('./resizable'),
    ];
    if (options && options.enableDragDropAttributes === true) {
        attributes.push(aurelia_pal_1.PLATFORM.moduleName('./draggable'));
        attributes.push(aurelia_pal_1.PLATFORM.moduleName('./dropzone'));
    }
    aurelia.globalResources(attributes);
}
exports.configure = configure;
