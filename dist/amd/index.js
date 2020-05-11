define(["require", "exports", "./draggable", "./dropzone", "./interact-draggable", "./interact-dropzone", "./interact-gesturable", "./interact-resizable", "./resizable", "interactjs", "aurelia-pal"], function (require, exports, draggable_1, dropzone_1, interact_draggable_1, interact_dropzone_1, interact_gesturable_1, interact_resizable_1, resizable_1, Interact, aurelia_pal_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(draggable_1);
    __export(dropzone_1);
    __export(interact_draggable_1);
    __export(interact_dropzone_1);
    __export(interact_gesturable_1);
    __export(interact_resizable_1);
    __export(resizable_1);
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
});
