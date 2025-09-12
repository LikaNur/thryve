"use client";

import { useState } from "react";
import { WelcomePage } from "./features";
import { GameSteps } from "../types/types";

export default function HomePage() {
  const [step, setStep] = useState<GameSteps>("welcome");
  const [username, setUsername] = useState("");

  if (step === "welcome")
    return (
      <WelcomePage
        onStart={(name) => {
          setStep("game");
          setUsername(name);
        }}
      />
    );

  if (step === "game") {
    return <div>GameBoard Username: {username}</div>;
  }

  if (step === "result") {
    return <div>ResultBoard {username}</div>;
  }
}
