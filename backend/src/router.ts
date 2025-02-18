import { Router, Request, Response } from "express";
import { GameController } from "./controller";
import { Board } from "./interfaces/IBoard";

const router = Router();
const gameController = new GameController();

router.post("/check-winner", (req: Request, res: Response) => {
  try {
    const board = req.body;

    // Validar que el tablero sea válido
    if (!board || !Array.isArray(board.squares) || board.squares.length !== 9) {
      res.status(400).json({
        error: "Tablero inválido. Debe ser un array de 9 posiciones.",
      });
      return;
    }
    // Validar que cada posición sea X, O o null
    const isValidBoard = board.squares.every(
      (square: string) => square === "X" || square === "O" || square === null
    );

    if (!isValidBoard) {
      res.status(400).json({
        error: "Tablero inválido. Las posiciones solo pueden ser X, O o null.",
      });
      return;
    }
    const result = gameController.checkWinner(board);
    res.send(result);
  } catch (error) {
    res.status(500).json({
      error: "Error al procesar la solicitud",
    });
  }
});

router.post("/player-move", async (req: Request, res: Response) => {
  try {
    const board = req.body;

    // Validar que el tablero sea válido
    if (!board || !Array.isArray(board.squares) || board.squares.length !== 9) {
      res.status(400).json({
        error: "Tablero inválido. Debe ser un array de 9 posiciones.",
      });
      return;
    }

    // Validar que cada posición sea X, O o null
    const isValidBoard = board.squares.every(
      (square: string) => square === "X" || square === "O" || square === null
    );

    if (!isValidBoard) {
      res.status(400).json({
        error: "Tablero inválido. Las posiciones solo pueden ser X, O o null.",
      });
      return;
    }

    const result = await gameController.handlePlayerMove(board);
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: "Error al procesar la solicitud",
    });
  }
});
router.get("/game-results", async (req: Request, res: Response) => {
  try {
    const results = await gameController.getGameResults();
    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: "Error al obtener los resultados de las partidas",
    });
  }
});

export default router;
