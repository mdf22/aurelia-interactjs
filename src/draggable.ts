import { inject } from 'aurelia-framework';
import * as Interact from 'interactjs';
import InteractBase from './interact-base';

@inject(Element, Interact)
export class DraggableCustomAttribute extends InteractBase {
  public bind() {
    this.unsetInteractJs();
    this.element.classList.add('draggable');
    this.interactable = this.interact(this.element, this.getInteractableOptions())
      .draggable(this.getActionOptions())
        .on('dragmove', event => {
          let target = event.target;
          let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
          target.classList.add('getting--dragged');
        })
        .on('dragend', event => {
          event.target.style.transform = 'none';
          event.target.removeAttribute('data-x');
          event.target.removeAttribute('data-y');
          event.target.classList.remove('getting--dragged');
        });
  }
}

