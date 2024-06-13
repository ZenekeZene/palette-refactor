import { Table } from '@/domain/Table/Table'

export type InitialState = {
	lives: number,
	bonus: number,
	score: number,
	currentLevel: number,
}

type State = {
	table: Table,
	tutorialIsWatched: boolean,
} & InitialState

type Actions = {
	setTutorialIsLaunched: (value: boolean) => void,
	setScore: (value: number) => void,
	startGame: () => void,
}

export type Store = State & Actions;
