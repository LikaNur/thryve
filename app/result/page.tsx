"use client";

import { useGameContext } from "@/context/GameContext";
import { ResultBoard } from "@/feature/result/ResultBoard";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const { setStats } = useGameContext();
  const router = useRouter();

  return (
    <div>
      <ResultBoard
        onRestart={() => {
          setStats({ correct: 0, errors: 0 });
          router.push("/");
        }}
      />
    </div>
  );
}
