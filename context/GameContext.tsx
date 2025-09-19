"use client";

import { Stats } from "@/types/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GameContextType = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  stats: Stats;
  setStats: Dispatch<SetStateAction<Stats>>;
};

export const GameContext = createContext<GameContextType | null>(null);

export default function GameProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState<Stats>({ correct: 0, errors: 0 });

  return (
    <GameContext value={{ username, setUsername, stats, setStats }}>
      {children}
    </GameContext>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
}
