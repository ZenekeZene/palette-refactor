import { useNavigate } from 'react-router-dom'
import { ColorTypes } from '@gameContext/shared/infrastructure/store/store.d'
import type { Colors, Player } from '../../../adapter/store/types/store'
import { Header } from '../Header/Header'
import { ColorsRow } from '../ColorRow/ColorRow'
import { ResultZone } from './ResultColorsZone.styled'

export const ResultColorsZone = ({
  player,
  colors,
}: {
  player: Player
  colors: Colors
}) => {
  const navigate = useNavigate()

  return (
    <ResultZone>
      <Header
        level={player.levelIndex + 1}
        lives={player.lives}
        score={player.score}
        onBack={() => navigate('/')}
      />
      {colors && <ColorsRow colors={colors} type={ColorTypes.RESULT} />}
    </ResultZone>
  )
}
