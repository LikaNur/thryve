"use client";

import { ResultBoard } from "@/feature/result/ResultBoard";
import { useParams } from "next/navigation";

export default function ResultPage() {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <ResultBoard username={username} />
    </div>
  );
}
