"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Game from "./tic-tac-toe/components/Game";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/game");
  }, [router]);

  return null;
}
