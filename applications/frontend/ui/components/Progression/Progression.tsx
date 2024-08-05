import {
  ProgressionWrapper,
  Text,
  Percent,
  List,
  Item,
} from './Progression.styled'

const errorMessage = `Error with Progression component.
	CurrentLevel can not be major than totalLevels`

interface Props {
  currentLevel: number
  totalLevels: number
}

const ProgressionList = ({ currentLevel, totalLevels }: Props) => {
  const isCompleted = (index: number): boolean => currentLevel > index

  return (
    <List>
      {new Array(totalLevels).fill('').map((_, index) => (
        <Item
          key={`level-${index}`}
          $completed={isCompleted(index)}
          aria-label={`Level ${index} ${isCompleted(index) ? 'unfinished ' : 'completed'}`}
        >
          {}
        </Item>
      ))}
    </List>
  )
}

const Progression = ({ currentLevel, totalLevels }: Props) => {
  if (currentLevel > totalLevels) throw new Error(errorMessage)
  const percent = Math.floor((currentLevel / totalLevels) * 100)

  return (
    <ProgressionWrapper role="progressbar" aria-valuenow={percent}>
      <Text>
        Game progression: &nbsp;
        <Percent>{percent}%</Percent>
      </Text>
      <ProgressionList currentLevel={currentLevel} totalLevels={totalLevels} />
    </ProgressionWrapper>
  )
}

export { Progression }
