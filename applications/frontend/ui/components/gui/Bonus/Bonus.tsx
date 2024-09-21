import { AiFillThunderbolt as IconBonus } from 'react-icons/ai'
import { BonusWrapper, BonusCount } from './Bonus.styled'

interface Props {
  bonus: number
  onClick: () => void
}

export const Bonus = ({ bonus, onClick }: Props) => (
  <BonusWrapper onClick={onClick}>
    <IconBonus />
    <BonusCount>{bonus}</BonusCount>
  </BonusWrapper>
)
