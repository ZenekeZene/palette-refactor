import { RouteObject } from 'react-router-dom'
import { HomeView } from '@frontend/ui/views/Home/Home'
import { GameView } from '@frontend/ui/views/Game/Game'
import { TutorialView } from '@frontend/ui/views/Tutorial/Tutorial'
import { TryAgainView } from '@frontend/ui/views/TryAgain/TryAgain'
import { NextLevelView } from '@frontend/ui/views/NextLevel/NextLevel'
import { FinalView } from '@frontend/ui/views/Final/Final'

export const routes: RouteObject[] = [
  { path: HomeView.path, element: <HomeView /> },
  { path: '*', element: <HomeView /> },
  { path: TutorialView.path, element: <TutorialView /> },
  { path: GameView.path, element: <GameView /> },
  { path: NextLevelView.path, element: <NextLevelView /> },
  { path: TryAgainView.path, element: <TryAgainView /> },
  { path: FinalView.path, element: <FinalView /> },
]
