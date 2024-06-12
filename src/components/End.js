import React, { useContext } from "react";
import { GameContext } from "../GameContext";
import data from "../data";

export default function End() {
  const { setGameStatus, score, setScore } = useContext(GameContext);

  const restart = () => {
    setGameStatus("game");
    setScore(0);
  };

  return (
    <div>
      <p className="res">
        Кількість вірних відповідей {score} з {data.length}
      </p>
      <button className="btn" type="button" onClick={restart}>
        Почати знову
      </button>
    </div>
  );
}
