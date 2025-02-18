import { WINNING_SQUARES } from "./constants";
import { GameResult } from "./enums/GameResult";
import { Players } from "./enums/Players";
import { Board } from "./interfaces/IBoard";
import { IGameResult } from "./interfaces/IGameResult";
import { INextMove } from "./interfaces/INextMove";
import { GameRepository } from "./gameRepository";

export class GameController {
  private gameRepository = new GameRepository();
  private calculateWinner(squares: Array<Players | null>): Players | null {
    for (const [a, b, c] of WINNING_SQUARES) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  checkWinner(board: Board): { winner: Players | null; isGameOver: boolean } {
    const winner = this.calculateWinner(board.squares);
    // Acaba la partida si hay un ganador o no hay espacios vacios
    const isGameOver = winner !== null || !board.squares.includes(null);
    return {
      winner,
      isGameOver,
    };
  }

  calculateNextMove(board: Board): Board {
    const newSquares = [...board.squares];
    // Obtener los indices de las posiciones vacias
    const emptySquares = newSquares.reduce((acc: number[], square, index) => {
      if (square === null) acc.push(index);
      return acc;
    }, []);

    if (emptySquares.length === 0) {
      return board;
    }

    // Buscar jugada ganadora para la máquina
    for (const position of emptySquares) {
      const testSquares = [...newSquares];
      testSquares[position] = Players.O;
      if (this.calculateWinner(testSquares) === Players.O) {
        newSquares[position] = Players.O;
        return { squares: newSquares };
      }
    }

    // Bloquear jugada ganadora del jugador
    for (const position of emptySquares) {
      const testSquares = [...newSquares];
      testSquares[position] = Players.X;
      if (this.calculateWinner(testSquares) === Players.X) {
        newSquares[position] = Players.O;
        return { squares: newSquares };
      }
    }

    // Elección aleatoria
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const selectedPosition = emptySquares[randomIndex];
    newSquares[selectedPosition] = Players.O;

    return { squares: newSquares };
  }

  async handlePlayerMove(board: Board): Promise<INextMove> {
    const updatedBoard = this.calculateNextMove(board);
    const {isGameOver, winner} = this.checkWinner(updatedBoard);
    
    if (isGameOver) {
      if (!winner) {
        // Es un empate
        await this.gameRepository.saveGameResult('DRAW');
      } else {
        // Hay un ganador
        await this.gameRepository.saveGameResult(winner);
      }
    }

    return {
      updatedBoard,
      gameStatus: { winner, isGameOver },
    };
  }
  async getGameResults(): Promise<IGameResult[]> {
    return this.gameRepository.getGameResults();
  }
}
