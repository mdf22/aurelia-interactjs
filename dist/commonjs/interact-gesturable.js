"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var Interact = require("interactjs");
var interact_base_1 = require("./interact-base");
var InteractGesturableCustomAttribute = /** @class */ (function (_super) {
    __extends(InteractGesturableCustomAttribute, _super);
    function InteractGesturableCustomAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InteractGesturableCustomAttribute.prototype.bind = function () {
        var _this = this;
        this.unsetInteractJs();
        this.interactable = this.interact(this.element, this.getInteractableOptions())
            .dropzone(this.getActionOptions())
            .on('gesturestart', function (event) { return _this.dispatch('interact-gesturestart', event); })
            .on('gesturemove', function (event) { return _this.dispatch('interact-gesturemove', event); })
            .on('gestureend', function (event) { return _this.dispatch('interact-gestureend', event); });
    };
    InteractGesturableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, Interact)
    ], InteractGesturableCustomAttribute);
    return InteractGesturableCustomAttribute;
}(interact_base_1.default));
exports.InteractGesturableCustomAttribute = InteractGesturableCustomAttribute;
