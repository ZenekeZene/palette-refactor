import { describe, test, expect, afterEach } from 'bun:test'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TutorialView } from './Tutorial'

describe('Tutorial view', () => {
  afterEach(() => {
    cleanup()
  })

  test(`if the user clicks on the view,
		then she is directed to the game`, async () => {
    const user = userEvent.setup()
    render(<TutorialView />, { wrapper: MemoryRouter })

    const title = screen.getByTestId('tutorial')
    await user.click(title)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })

  test(`if the user clicks on the link,
		then she is directed to the game`, async () => {
    const user = userEvent.setup()
    render(<TutorialView />, { wrapper: MemoryRouter })

    const skipButton = screen.getByRole('link', { name: /That's all!/i })
    await user.click(skipButton)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })
})
