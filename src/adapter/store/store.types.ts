import { LevelsCollection } from '@/domain/Level/LevelsCollection'
import { Quote } from '@/domain/Quote/Quote'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { GameSession } from '@/domain/GameSession/GameSession'

export type State = {
	gameSession: GameSession,
	levels: LevelsCollection,
	tutorialIsWatched: boolean,
	quotes: QuotesCollection,
	quote: Quote,
}

type Actions = {
	setTutorialIsLaunched: (value: boolean) => void,
	setScore: (value: number) => void,
	nextQuote: () => void,
	nextLevel: () => void,
}

export type Store = State & Actions;
