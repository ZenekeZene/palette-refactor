import { container } from 'tsyringe'
import { vi, describe, test, expect, afterEach, beforeAll } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import {
  type UseStore,
  StoreMother,
} from '@frontend/adapter/store/factories/store.mother'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { configureDependencies } from '@frontend/infrastructure/dependency-injection/container'
import { PlayerResponseProps } from '@gameContext/player/application/dto/PlayerResponse'
import { GameView } from './Game'
import { ColorMixerLogger } from '@gameContext/color/domain/repositories/ColorMixerLogger'
import { ColorMixerMockedLogger } from '@gameContext/color/infrastructure/ColorMixerMockedLogger'

const useStore: UseStore = vi.hoisted(() => vi.fn())
vi.mock('@frontend/adapter/store/useStore', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...(actual as object),
    useStore,
  }
})

const renderGameView = () => render(<GameView />, { wrapper: MemoryRouter })

const setupStoreAndRender = (props: Partial<PlayerResponseProps>) => {
  StoreMother.storeWithPlayerProps(useStore, {
    ...props,
  })
  renderGameView()
}

describe('GameView', () => {
  beforeAll(async () => {
    configureDependencies()
    container.registerSingleton<ColorMixerLogger>(
      Types.ColorMixerLogger,
      ColorMixerMockedLogger,
    )
  })

  afterEach(() => {
    cleanup()
  })

  test(`should show the number of bonus
    if the player has bonus`, () => {
    StoreMother.storeWithPlayerProps(useStore, {
      bonus: 1,
    })
    renderGameView()
    const bonus = screen.getByText('1')

    expect(bonus).toBeInTheDocument()
  })

  test(`should not show the number of bonus
    if the player has no bonus`, () => {
    StoreMother.storeWithPlayerProps(useStore, {
      bonus: 0,
    })
    renderGameView()
    const bonus = screen.queryByText('1')

    expect(bonus).toBeNull()
  })

  test(`should show the number of lives`, () => {
    setupStoreAndRender({ lives: 3 })
    const lives = screen.getByText('3')
    expect(lives).toBeInTheDocument()
  })

  test(`should show the level`, () => {
    setupStoreAndRender({ levelIndex: 0 })
    const level = screen.getByText(/Level 1/)
    expect(level).toBeInTheDocument()
  })

  test(`should show the score`, () => {
    setupStoreAndRender({ score: 100 })
    const score = screen.getByText(/100/)
    expect(score).toBeInTheDocument()
  })
})
