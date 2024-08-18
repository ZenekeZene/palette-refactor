import { useStore } from '@frontend/adapter/store/useStore'
import {
  Final,
  Title,
  Subtitle,
  Share,
  Score,
  Level,
  LevelScore,
  Laurel,
  Illustration,
} from './Final.styled'

export const FinalView = () => {
  const state = useStore((state) => state.player)

  return (
    <Final className="view">
      <section>
        <Title>Well done!</Title>
        <Subtitle>
          You have finished with <Score>{state.score} points at level</Score>
        </Subtitle>
        <Level>
          <LevelScore>{state.level}</LevelScore>
          <Laurel src="/laurel.svg" alt="" />
          <Share>SHARE YOUR RECORD</Share>
        </Level>
      </section>
      <Illustration src="/pet.png" alt="" />
    </Final>
  )
}

FinalView.path = '/final'
