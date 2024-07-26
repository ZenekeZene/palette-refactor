import { vi, describe, test, expect, afterEach, beforeAll } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  type UseStore,
  StoreMother,
} from '@frontend/adapter/store/factories/store.mother'
import { TryAgainView } from './TryAgain'
import { configureDependencies } from '@gameContext/shared/infrastructure/dependency-injection/container'

const useStore: UseStore = vi.hoisted(() => vi.fn())
vi.mock('@frontend/adapter/store/useStore', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...(actual as object),
    useStore,
  }
})

const renderTryAgainView = () =>
  render(<TryAgainView />, { wrapper: MemoryRouter })

describe('Next Level view', () => {
  beforeAll(async () => {
    configureDependencies()
  })
  afterEach(() => {
    cleanup()
  })

  test(`if the user clicks on the "Play" button,
		then she is directed to the game`, async () => {
    StoreMother.minimalStore(useStore)
    const user = userEvent.setup()
    renderTryAgainView()

    const nextLevelButton = screen.getByLabelText('Replay the level')
    await user.click(nextLevelButton)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })

  test(`the progression is displayed to the user`, () => {
    StoreMother.storeMultipleLevels(useStore, { level: 6, levelsCount: 10 })
    renderTryAgainView()

    const progression = screen.getByRole('progressbar')
    expect(progression).toBeInTheDocument()
    expect(progression).toHaveAttribute('aria-valuenow', '60')
  })
})
