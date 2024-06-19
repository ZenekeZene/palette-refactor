import { Table } from '@/domain/Table/Table'
import { Quote } from '@/domain/Quote/Quote'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { GameSession } from '@/domain/GameSession/GameSession'

export type State = {
	gameSession: GameSession,
	table: Table,
	tutorialIsWatched: boolean,
	quotes: QuotesCollection,
	quote: Quote,
}

type Actions = {
	setTutorialIsLaunched: (value: boolean) => void,
	setScore: (value: number) => void,
	nextQuote: () => void,
	nextLevel: () => void,
	resetGame: () => void,
}

export type Store = State & Actions;
