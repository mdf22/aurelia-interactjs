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
define(["require", "exports", "aurelia-framework", "interactjs", "./interact-base"], function (require, exports, aurelia_framework_1, Interact, interact_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InteractDropzoneCustomAttribute = /** @class */ (function (_super) {
        __extends(InteractDropzoneCustomAttribute, _super);
        function InteractDropzoneCustomAttribute() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InteractDropzoneCustomAttribute.prototype.bind = function () {
            var _this = this;
            this.unsetInteractJs();
            this.interactable = this.interact(this.element, this.getInteractableOptions())
                .dropzone(this.getActionOptions())
                .on('dropactivate', function (event) { return _this.dispatch('interact-dropactivate', event); })
                .on('dragenter', function (event) { return _this.dispatch('interact-dragenter', event); })
                .on('dragleave', function (event) { return _this.dispatch('interact-dragleave', event); })
                .on('drop', function (event) { return _this.dispatch('interact-drop', event); })
                .on('dropdeactivate', function (event) { return _this.dispatch('interact-dropdeactivate', event); });
        };
        InteractDropzoneCustomAttribute = __decorate([
            aurelia_framework_1.inject(Element, Interact)
        ], InteractDropzoneCustomAttribute);
        return InteractDropzoneCustomAttribute;
    }(interact_base_1.default));
    exports.InteractDropzoneCustomAttribute = InteractDropzoneCustomAttribute;
});
