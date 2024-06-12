import React, { useState, useContext } from "react";
import data from "../data";
import { GameContext } from "../GameContext";

export default function Game() {
  const { setGameStatus, score, setScore } = useContext(GameContext);
  const [index, setIndex] = useState(0);
  const ques = data[index];

  const [userVariant, setUserVariant] = useState("");
  console.log(userVariant);

  const next = () => {
    if (userVariant === ques.answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setIndex(index + 1);
  };

  const result = () => {
    if (userVariant === ques.answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setGameStatus("end");
  };
  return (
    <div>
      {ques.img && <img src={ques.img} alt="img" />}
      <h2 className="title">{ques.question}</h2>
      <button
        onClick={() => setUserVariant("variant1")}
        type="button"
        className="variant"
      >
        {ques.variant1}
      </button>
      <button
        onClick={() => setUserVariant("variant2")}
        type="button"
        className="variant"
      >
        {ques.variant2}
      </button>
      <button
        onClick={() => setUserVariant("variant3")}
        type="button"
        className="variant"
      >
        {ques.variant3}
      </button>
      <button
        onClick={() => setUserVariant("variant4")}
        type="button"
        className="variant"
      >
        {ques.variant4}{" "}
      </button>
      <br />
      {index === data.length - 1 ? (
        <button type="button" className="btn" onClick={result}>
          Перейти до результату
        </button>
      ) : (
        <button type="button" className="btn" onClick={next}>
          Наступне питання
        </button>
      )}
    </div>
  );
}
