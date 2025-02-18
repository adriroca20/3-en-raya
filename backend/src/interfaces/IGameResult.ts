import { GameResult } from "../enums/GameResult";
import { Players } from "../enums/Players";

export interface IGameResult {
    player: Players;
    result: GameResult;
    date: Date;
} 