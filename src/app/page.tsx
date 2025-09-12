"use client";

import { useState } from "react";
import { GameBoard, ResultBoard, WelcomePage } from "./features";
import { GameSteps } from "../types/types";


export default function HomePage() {
  const [step, setStep] = useState<GameSteps>("welcome");
  const [username, setUsername] = useState("");
  const [result, setResult] = useState<{ correct: number; errors: number }>({
    correct: 0,
    errors: 0,
  });

  switch (step) {
    case "welcome":
      return (
        <WelcomePage
          onStart={(name) => {
            setUsername(name);
            setStep("game");
          }}
        />
      );
    case "game":
      return (
        <GameBoard
          username={username}
          onGameOver={(stats) => {
            setResult(stats);
            setStep("result");
          }}
        />
      );

    case "result":
      return (
        <div>
          <ResultBoard
            username={username}
            stats={result}
            onRestart={() => {
              setStep("welcome");
            }}
          />
        </div>
      );
    default:
      return null;
  }
}
