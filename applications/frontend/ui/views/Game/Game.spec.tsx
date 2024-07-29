import { vi, describe, test, expect, afterEach, beforeAll } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import {
  type UseStore,
  StoreMother,
} from '@frontend/adapter/store/factories/store.mother'
import { configureDependencies } from '@gameContext/shared/infrastructure/dependency-injection/container'
import { PlayerResponseProps } from '@gameContext/player/application/dto/PlayerResponse'
import { GameView } from './Game'

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
    setupStoreAndRender({ level: 5 })
    const level = screen.getByText(/5/)
    expect(level).toBeInTheDocument()
  })

  test(`should show the score`, () => {
    setupStoreAndRender({ score: 100 })
    const score = screen.getByText(/100/)
    expect(score).toBeInTheDocument()
  })
})
