import { Mock, vi, describe, test, expect, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StoreMother } from '@/adapter/store/__mocks__/store.mother'
import { TryAgainView } from './TryAgain'

const useStore: Mock<any, any> = vi.hoisted(() => vi.fn())
vi.mock('@/adapter/store/store', () => ({
  useStore,
}))

describe('Next Level view', () => {
  afterEach(() => {
    cleanup()
  })

  test(`if the user clicks on the "Play" button,
		then she is directed to the game`, async () => {
    StoreMother.minimalStore(useStore)
    const user = userEvent.setup()
    render(<TryAgainView />, { wrapper: MemoryRouter })

    const nextLevelButton = screen.getByLabelText('Replay the level')
    await user.click(nextLevelButton)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })

  test(`the progression is displayed to the user`, () => {
    StoreMother.storeMultipleLevels(useStore, { level: 6, levelsCount: 10 })
    render(<TryAgainView />, { wrapper: MemoryRouter })

    const progression = screen.getByRole('progressbar')
    expect(progression).toBeInTheDocument()
    expect(progression).toHaveAttribute('aria-valuenow', '60')
  })
})
