import { Board } from "./interfaces/Board";

const WINNING_SQUARES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export class GameController {
  private calculateWinner(squares: Array<"X" | "O" | null>): "X" | "O" | null {
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

  checkWinner(board: Board): { winner: "X" | "O" | null; isGameOver: boolean } {
    const winner = this.calculateWinner(board.squares);
    // Acaba la partida si hay un ganador o no hay espacios vacios
    const isGameOver = winner !== null || !board.squares.includes(null);
    return {
      winner,
      isGameOver,
    };
  }

  calculateNextMove(board: Board): {
    updatedBoard: Board;
    gameStatus: { winner: "X" | "O" | null; isGameOver: boolean };
  } {
    // Copiar el tablero para no modificar el original
    const newSquares = [...board.squares];

    // Encontrar todas las posiciones vacías
    const emptySquares = newSquares.reduce((acc: number[], square, index) => {
      if (square === null) acc.push(index);
      return acc;
    }, []);

    // Si no hay posiciones vacías, retornar el mismo tablero
    if (emptySquares.length === 0) {
      return {
        updatedBoard: board,
        gameStatus: this.checkWinner(board),
      };
    }

    // Implementación simple: elegir una posición aleatoria vacía
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const selectedPosition = emptySquares[randomIndex];

    // La máquina juega con 'O'
    newSquares[selectedPosition] = "O";

    const updatedBoard: Board = { squares: newSquares };
    const gameStatus = this.checkWinner(updatedBoard);

    return {
      updatedBoard,
      gameStatus,
    };
  }
}
