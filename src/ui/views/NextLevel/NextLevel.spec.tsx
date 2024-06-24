import { vi, describe, test, expect, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextLevelView } from './NextLevel'
import { mockStore } from '@/adapter/store/__mocks__/store.mother'

const useStore = vi.hoisted(() => vi.fn())
vi.mock("@/adapter/store/store", () => ({
  useStore,
}))

const renderNextLevelView = () => render(<NextLevelView />, { wrapper: MemoryRouter })

describe('Next Level view', () => {
  afterEach(() => {
    cleanup()
  })

  test(`if the user clicks on the "Play" button,
		then she is directed to the game`, async () => {
    mockStore(useStore)
    const user = userEvent.setup()
    renderNextLevelView()

    const nextLevelButton = screen.getByLabelText('Next level')
    await user.click(nextLevelButton)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })

  test(`if the user clicks on the "Next" button,
    then the progression bar is filled to 100%
    `, async () => {
    mockStore(useStore)
    const user = userEvent.setup()
    const { rerender } = renderNextLevelView()

    const progression = screen.getByRole('progressbar')
    expect(progression).toHaveAttribute('aria-valuenow', '0')

    const button = screen.getByRole('button', { name: 'Next' })
    await user.click(button)
    rerender(<NextLevelView />)

    expect(progression).toHaveAttribute('aria-valuenow', '100')
  })

  test(`given a quote, it is displayed in the view`, async () => {
    const quote = { text: 'This is a fabolous quote', author: 'Zeneke' }
    mockStore(useStore, { quote })
    renderNextLevelView()

    const title = screen.getByText('”This is a fabolous quote”')
    const subtitle = screen.getByText('—Zeneke—')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
