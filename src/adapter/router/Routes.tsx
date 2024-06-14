import { RouteObject } from "react-router-dom"
import { HomeView } from "@/ui/views/Home/Home"
import { GameView } from "@/ui/views/Game/Game"
import { TutorialView } from "@/ui/views/Tutorial/Tutorial"
import { TryAgainView } from "@/ui/views/TryAgain/TryAgain"
import { NextLevelView } from "@/ui/views/NextLevel/NextLevel"
import { FinalView } from "@/ui/views/Final/Final"

const routes:RouteObject[] = [
	{ path: "/", element: <HomeView /> },
	{ path: "*", element: <HomeView /> },
	{ path: "/tutorial", element: <TutorialView /> },
	{ path: "/game", element: <GameView /> },
	{ path: "/next-level", element: <NextLevelView /> },
	{ path: "/try-again", element: <TryAgainView /> },
	{ path: "/final", element: <FinalView /> },
]

export { routes }
