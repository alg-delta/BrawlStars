import "./App.css";
import Game from "./components/Game";
import End from "./components/End";
import Start from "./components/Start";

import { useState } from "react";
import { GameContext } from "./GameContext";

function App() {
  const [gameStatus, setGameStatus] = useState("start");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1 className="header">тест</h1>
      <GameContext.Provider
        value={{ gameStatus, setGameStatus, score, setScore }}
      >
        {gameStatus === "start" && <Start />}
        {gameStatus === "game" && <Game />}
        {gameStatus === "end" && <End />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
