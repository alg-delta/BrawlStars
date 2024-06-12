import React, { useContext } from "react";

import { GameContext } from "../GameContext";

export default function Start() {
  const { setGameStatus } = useContext(GameContext);
  return (
    <div>
      <button
        onClick={() => setGameStatus("game")}
        type="button"
        className="btn"
      >
        Старт
      </button>
    </div>
  );
}
