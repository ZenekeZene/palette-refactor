import {
  DraggerFacade,
  DraggerFacadeProps,
} from '@frontend/infrastructure/DraggerFacade'

export type DraggerType = (config: DraggerFacadeProps) => {
  init: () => { unset: () => void }
}

export const Dragger = ({
  targetElement,
  start,
  move,
  end,
}: DraggerFacadeProps) => {
  const dragFacade = new DraggerFacade({
    targetElement,
    start,
    move,
    end,
  })

  const unset = () => {
    dragFacade.unset()
  }

  const init = () => {
    dragFacade.init()
    return { unset }
  }
  return { init }
}
