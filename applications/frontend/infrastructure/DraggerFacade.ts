import interact from 'interactjs'
import type { ListenersArg } from '@interactjs/types'

export interface DraggerFacadeProps {
  targetElement: HTMLElement
  start: ListenersArg
  move: ListenersArg
  end: ListenersArg
}

export class DraggerFacade {
  private readonly targetElement: HTMLElement
  private readonly start: ListenersArg
  private readonly move: ListenersArg
  private readonly end: ListenersArg

  private draggableConfig = {
    inertia: false,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      }),
    ],
  }

  constructor({ targetElement, start, move, end }: DraggerFacadeProps) {
    this.start = start
    this.move = move
    this.end = end
    this.targetElement = targetElement
  }

  init() {
    interact(this.targetElement).draggable({
      ...this.draggableConfig,
      listeners: {
        start: this.start,
        move: this.move,
        end: this.end,
      },
    })
  }

  unset() {
    interact(this.targetElement).unset()
  }
}
