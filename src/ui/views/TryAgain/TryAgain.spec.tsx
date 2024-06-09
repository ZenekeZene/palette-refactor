import { describe, test, expect, afterEach } from 'bun:test'
import { MemoryRouter } from "react-router-dom";
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TryAgainView } from './TryAgain'

describe('Next Level view', () => {
	afterEach(() => {
		cleanup()
	})

	test(`if the user clicks on the "Play" button,
		then she is directed to the game`, async () => {
		const user = userEvent.setup()
		render(<TryAgainView />, { wrapper: MemoryRouter })

		const nextLevelButton = screen.getByLabelText('Replay the level')
		await user.click(nextLevelButton)

		const expected = screen.getByTestId('location-display')
		expect(expected.textContent).toBe('/game')
	})
})
