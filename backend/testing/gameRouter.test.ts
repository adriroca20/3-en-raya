import request from "supertest";
import express from "express";
import gameRouter from "../src/gameRouter";
import { Players } from "../src/enums/Players";

const app = express();
app.use(express.json());
app.use("/api/game", gameRouter);

describe("Game Router Tests", () => {
  describe("POST /api/game/player-move", () => {
    it("should reject an invalid board without squares", async () => {
      const response = await request(app)
        .post("/api/game/player-move")
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        "Tablero inválido. Debe ser un array de 9 posiciones."
      );
    });

    it("should reject a board with invalid values", async () => {
      const response = await request(app)
        .post("/api/game/player-move")
        .send({
          squares: ["X", "INVALID", "O", null, null, null, null, null, null],
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        "Tablero inválido. Las posiciones solo pueden ser X, O o null."
      );
    });

    it("should accept a valid board", async () => {
      const response = await request(app)
        .post("/api/game/player-move")
        .send({
          squares: [
            Players.X,
            Players.O,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("gameStatus");
      expect(response.body.gameStatus.isGameOver).toBe(false);
      expect(response.body.gameStatus.winner).toBe(null);
      expect(response.body).toHaveProperty("updatedBoard");
      expect(response.body.updatedBoard.squares).toHaveLength(9);
    });

    it("should reject a board with incorrect length", async () => {
      const response = await request(app)
        .post("/api/game/player-move")
        .send({
          squares: [Players.X, Players.O, null, null],
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe(
        "Tablero inválido. Debe ser un array de 9 posiciones."
      );
    });
  });
});
