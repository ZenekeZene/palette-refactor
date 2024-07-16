import { describe, test, expect, vi } from 'vitest'
import { useClassnameOfRoute } from './useClassnameOfRoute'

const useLocation = vi.hoisted(() => vi.fn())
vi.mock('react-router-dom', () => ({ useLocation }))

describe('useClassnameOfRoute', () => {
  test(`given a location, the body have a classname with the pathname
    and his suffix `, () => {
    const spy = vi.spyOn(document.body, 'className', 'set')
    const pathname = '/home'
    const expected = 'home-view'
    useLocation.mockReturnValue({ pathname })

    useClassnameOfRoute()

    expect(spy).toHaveBeenCalledWith(expected)
  })
})
