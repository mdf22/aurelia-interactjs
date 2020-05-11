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
var DraggableCustomAttribute = /** @class */ (function (_super) {
    __extends(DraggableCustomAttribute, _super);
    function DraggableCustomAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DraggableCustomAttribute.prototype.bind = function () {
        this.unsetInteractJs();
        this.element.classList.add('draggable');
        this.interactable = this.interact(this.element, this.getInteractableOptions())
            .draggable(this.getActionOptions())
            .on('dragmove', function (event) {
            var target = event.target;
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            target.classList.add('getting--dragged');
        })
            .on('dragend', function (event) {
            event.target.style.transform = 'none';
            event.target.removeAttribute('data-x');
            event.target.removeAttribute('data-y');
            event.target.classList.remove('getting--dragged');
        });
    };
    DraggableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element, Interact)
    ], DraggableCustomAttribute);
    return DraggableCustomAttribute;
}(interact_base_1.default));
exports.DraggableCustomAttribute = DraggableCustomAttribute;
