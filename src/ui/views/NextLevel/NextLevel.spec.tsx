import { mock, describe, test, expect, afterEach } from 'bun:test'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextLevelView } from './NextLevel'

mock('zustand')

describe('Next Level view', () => {
  afterEach(() => {
    cleanup()
  })

  test(`if the user clicks on the "Play" button,
		then she is directed to the game`, async () => {
    const user = userEvent.setup()
    render(<NextLevelView />, { wrapper: MemoryRouter })

    const nextLevelButton = screen.getByLabelText('Next level')
    await user.click(nextLevelButton)

    const expected = screen.getByTestId('location-display')
    expect(expected.textContent).toBe('/game')
  })
})
