import { RouteObject } from 'react-router-dom'
import { HomeView } from '@frontend/ui/views/Home/Home'
import { GameView } from '@frontend/ui/views/Game/Game'
import { TutorialView } from '@frontend/ui/views/Tutorial/Tutorial'
import { TryAgainView } from '@frontend/ui/views/TryAgain/TryAgain'
import { NextLevelView } from '@frontend/ui/views/NextLevel/NextLevel'
import { FinalView } from '@frontend/ui/views/Final/Final'
import { createRef } from 'react'

type ExtendedRouteObject = RouteObject & {
  nodeRef: React.RefObject<HTMLDivElement>
}

export const routes: ExtendedRouteObject[] = [
  { path: HomeView.path, element: <HomeView />, nodeRef: createRef() },
  { path: '*', element: <HomeView />, nodeRef: createRef() },
  { path: TutorialView.path, element: <TutorialView />, nodeRef: createRef() },
  { path: GameView.path, element: <GameView />, nodeRef: createRef() },
  {
    path: NextLevelView.path,
    element: <NextLevelView />,
    nodeRef: createRef(),
  },
  { path: TryAgainView.path, element: <TryAgainView />, nodeRef: createRef() },
  { path: FinalView.path, element: <FinalView />, nodeRef: createRef() },
]
