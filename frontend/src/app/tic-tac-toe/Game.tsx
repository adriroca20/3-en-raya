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
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setCurrentMove(0);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-col justify-center gap-8">
        <GameInfo playerTurn={xIsNext ? "X" : "O"} />
        <Board squares={squares} onPlay={handlePlay} />
        <div className="flex flex-col md:flex-col justify-center gap-8">
          <button
            className="bg-accent text-black rounded flex items-center justify-center border border-transparent hover:bg-white hover:border-accent transition-all"
            onClick={handleReset}
          >
            <span className="text-2xl font-bold">Reset game</span>
          </button>
        </div>
      </div>
    </div>
  );
}
