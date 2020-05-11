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
    var ResizableCustomAttribute = /** @class */ (function (_super) {
        __extends(ResizableCustomAttribute, _super);
        function ResizableCustomAttribute() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * interact.js options
             */
            _this.defaults = {
                edges: {
                    bottom: true,
                    left: true,
                    right: true,
                    top: true,
                },
            };
            return _this;
        }
        ResizableCustomAttribute.prototype.bind = function () {
            this.unsetInteractJs();
            this.element.classList.add('resizable');
            this.interactable = this.interact(this.element, this.getInteractableOptions())
                .resizable(this.getActionOptions(this.defaults))
                .on('resizemove', function (event) {
                var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0), y = (parseFloat(target.getAttribute('data-y')) || 0);
                // update the element's style
                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';
                // translate when resizing from top or left edges
                x += event.deltaRect.left;
                y += event.deltaRect.top;
                target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
                target.classList.add('getting--resized');
            })
                .on('resizeend', function (event) {
                event.target.classList.remove('getting--resized');
            });
        };
        ResizableCustomAttribute = __decorate([
            aurelia_framework_1.inject(Element, Interact)
        ], ResizableCustomAttribute);
        return ResizableCustomAttribute;
    }(interact_base_1.default));
    exports.ResizableCustomAttribute = ResizableCustomAttribute;
});
