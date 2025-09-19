"use client";

import { useGameContext } from "@/context/GameContext";
import { WelcomeView } from "@/feature/welcome/WelcomeView";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { setUsername } = useGameContext();
  const router = useRouter();

  return (
    <WelcomeView
      onStart={(name) => {
        setUsername(name);
        router.push("/game");
      }}
    />
  );
}
