import React from 'react'
import { RouteObject } from 'react-router-dom'
import { HomeView } from '@frontend/ui/views/Home/Home'
import { GameView } from '@frontend/ui/views/Game/Game'
import { TutorialView } from '@frontend/ui/views/Tutorial/Tutorial'
import { TryAgainView } from '@frontend/ui/views/TryAgain/TryAgain'
import { NextLevelView } from '@frontend/ui/views/NextLevel/NextLevel'
import { FinalView } from '@frontend/ui/views/Final/Final'

const routes: RouteObject[] = [
  { path: '/', element: <HomeView /> },
  { path: '*', element: <HomeView /> },
  { path: '/tutorial', element: <TutorialView /> },
  { path: '/game', element: <GameView /> },
  { path: '/next-level', element: <NextLevelView /> },
  { path: '/try-again', element: <TryAgainView /> },
  { path: '/final', element: <FinalView /> },
]

export { routes }
