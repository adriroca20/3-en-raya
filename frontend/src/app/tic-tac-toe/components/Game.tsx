"use client";

import { useState } from "react";
import Board from "./Board";
import { GameInfo } from "./GameInfo";
import { useGame } from "../hooks/useGame";
import { WinnerPopup } from "./WinnerPopup";

export default function Game() {
  const { board, error, resetGame, handlePlay, playerTurn, isGameOver, winner } = useGame();
  const handleReset = () => {
    resetGame();
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-col justify-center gap-8">
        <GameInfo playerTurn={playerTurn} />
        <Board squares={board.squares} onPlay={handlePlay} />
        <div className="flex flex-col md:flex-col justify-center gap-8">
          <button
            className="bg-accent text-black rounded flex items-center justify-center border border-transparent hover:bg-white hover:border-accent transition-all"
            onClick={handleReset}
          >
            <span className="text-2xl font-bold">Reiniciar</span>
          </button>
        </div>
      </div>
      {isGameOver && <WinnerPopup winner={winner} onReset={handleReset} />}
    </div>
  );
}
