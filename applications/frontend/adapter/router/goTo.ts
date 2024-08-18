import { routes } from './Routes'

const delayInMs = 2000

export function goTo(path: string) {
  if (!routes.find((route) => route.path === path)) {
    throw new Error(`Path ${path} not found`)
  }

  setTimeout(() => {
    location.href = path
  }, delayInMs)
}
