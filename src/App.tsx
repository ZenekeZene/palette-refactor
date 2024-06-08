import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomeView } from "./ui/views/Home";
import { Tutorial } from "./ui/views/Tutorial";
import { GameView } from "./ui/views/Game";
import { TryAgainView } from "./ui/views/TryAgain";
import { FinalView } from "./ui/views/Final";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="/game" element={<GameView />}></Route>
        <Route path="/try-again" element={<TryAgainView />}></Route>
        <Route path="/final" element={<FinalView />}></Route>
        <Route path="*" element={<HomeView />}></Route>
      </Routes>
    </Router>
  )
}

export default App
