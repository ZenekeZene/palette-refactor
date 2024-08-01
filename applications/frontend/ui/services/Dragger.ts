import {
  DraggerFacade,
  DraggerFacadeProps,
} from '@frontend/infrastructure/DraggerFacade'

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
  return {
    init: () => {
      dragFacade.init()

      return {
        unset: () => {
          dragFacade.unset()
        },
      }
    },
  }
}
