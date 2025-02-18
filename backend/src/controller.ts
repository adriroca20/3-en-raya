import { Board } from './interfaces/Board';

export class GameController {
    private calculateWinner(squares: Array<'X' | 'O' | null>): 'X' | 'O' | null {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    checkWinner(board: Board): { winner: 'X' | 'O' | null, isGameOver: boolean } {
        const winner = this.calculateWinner(board.squares);
        // Acaba la partida si hay un ganador o no hay espacios vacios
        const isGameOver = winner !== null || !board.squares.includes(null);
        return {
            winner,
            isGameOver
        };
    }
}
