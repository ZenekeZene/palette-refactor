import { Table } from '@/domain/Table/Table'
import { Quote } from '@/domain/Quote/Quote'

export type InitialState = {
	lives: number,
	bonus: number,
	score: number,
	currentLevel: number,
}

type State = {
	table: Table,
	tutorialIsWatched: boolean,
	quote: Quote | null,
} & InitialState

type Actions = {
	setTutorialIsLaunched: (value: boolean) => void,
	setScore: (value: number) => void,
	startGame: () => void,
	getQuote: () => void,
	getInitialLives: () => void,
}

export type Store = State & Actions;
