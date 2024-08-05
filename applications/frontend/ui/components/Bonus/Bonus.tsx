import { AiFillThunderbolt as IconBonus } from 'react-icons/ai'
import { BonusWrapper, BonusCount } from './Bonus.styled'

const Bonus = ({ bonus }: { bonus: number }) => {
  return (
    <BonusWrapper>
      <IconBonus />
      <BonusCount>{bonus}</BonusCount>
    </BonusWrapper>
  )
}

export { Bonus }
