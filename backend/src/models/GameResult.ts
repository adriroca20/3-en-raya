import mongoose from "mongoose";
import { GameResult } from "../enums/GameResult";
import { Players } from "../enums/Players";
import { IGameResult } from "../interfaces/IGameResult";

const gameResultSchema = new mongoose.Schema<IGameResult>({
  date: { type: Date, default: Date.now },
  winner: {
    type: String,
    enum: ["X", "O", "DRAW"],
    required: true,
  }
});

export const GameResultModel = mongoose.model<IGameResult>(
  "GameResult",
  gameResultSchema
);
