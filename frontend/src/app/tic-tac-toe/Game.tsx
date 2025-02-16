"use client";

import { useState } from "react";
import Board from "./Board";
import { GameInfo } from "./GameInfo";

export default function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handlePlay = (index: number) => {
    const nextSquares = squares.slice();
    if (nextSquares[index] !== null) {
      return;
    }
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  };

  return (
    <div className="p-8 bg-background rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Tic Tac Toe
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Board squares={squares} onPlay={handlePlay} />
        <GameInfo currentMove={currentMove} playerTurn={xIsNext ? "X" : "O"} />
      </div>
    </div>
  );
}
