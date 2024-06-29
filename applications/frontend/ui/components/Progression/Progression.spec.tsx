import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Progression } from './Progression'

afterEach(() => {
  cleanup()
})

describe('Progression component', () => {
  test(`given a prop "currentLevel" major than "totalLevels",
		then throw an Error`, () => {
    const consoleSpy = vi.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})

    const props = {
      currentLevel: 10,
      totalLevels: 0,
    }
    expect(() => render(<Progression {...props} />)).toThrow()
  })

  test(`given the prop "currentLevel" and "totalLevels",
		then the percent is displayed`, () => {
    const props = {
      currentLevel: 5,
      totalLevels: 15,
    }

    render(<Progression {...props} />)

    expect(toBeVisible(screen.getByText('33%')).pass).toBe(true)
  })

  test(`given the prop "currentLevel" and "totalLevels",
		then the items are displayed with the correct number
		of completed items`, () => {
    const props = {
      currentLevel: 7,
      totalLevels: 10,
    }

    render(<Progression {...props} />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(10)

    const completed = screen.getAllByLabelText(/finished/)
    expect(completed).toHaveLength(7)
  })
})
