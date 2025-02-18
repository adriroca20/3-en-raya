import { gameService } from "@/app/lib/gameService";
import { useState, useEffect } from "react";
import { Board, Players } from "@/app/lib/definitions";

export const useGame = () => {
  const [board, setBoard] = useState<Board>({
    squares: Array(9).fill(null),
  });
  const [error, setError] = useState<string | null>(null);
  const [playerTurn, setPlayerTurn] = useState<Players>(Players.X);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState<Players | null>(null);

  const fetchPlayerMove = async (currentBoard: Board) => {
    try {
      const response = await gameService.getPlayerMove(currentBoard);
      setBoard(response.updatedBoard);
      setPlayerTurn(Players.X);
      setIsGameOver(response.gameStatus.isGameOver);
      setWinner(response.gameStatus.winner);
    } catch (error) {
      setError(error as string);
    }
  };

  const resetGame = () => {
    const newBoard = { squares: Array(9).fill(null) };
    setBoard(newBoard);
    setPlayerTurn(Players.X);
    setError(null);
    setIsGameOver(false);
    setWinner(null);
  };

  const handlePlay = async (index: number) => {
    if (
      board.squares[index] !== null ||
      playerTurn !== Players.X ||
      isGameOver
    ) {
      return;
    }

    const newBoard = {
      squares: [...board.squares],
    };
    newBoard.squares[index] = Players.X;
    setBoard(newBoard);
    setPlayerTurn(Players.O);

    // Obtener la jugada de la máquina
    await fetchPlayerMove(newBoard);
  };

  return {
    board,
    error,
    resetGame,
    handlePlay,
    playerTurn,
    isGameOver,
    winner,
  };
};
