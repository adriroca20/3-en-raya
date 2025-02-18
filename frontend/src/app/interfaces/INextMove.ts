import { Players } from "../enums/Players";
import { Board } from "./IBoard";

export interface INextMove {
    updatedBoard: Board;
    gameStatus: { winner: Players | null; isGameOver: boolean }
}
