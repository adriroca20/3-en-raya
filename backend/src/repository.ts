import { GameResult } from "./enums/GameResult";
import { Players } from "./enums/Players";
import { IGameResult } from "./interfaces/IGameResult";
import { GameResultModel } from "./models/GameResult";

export class GameRepository {
    async saveGameResult(winner: Players | 'DRAW'): Promise<IGameResult> {
        const gameResult = new GameResultModel({
            winner,
            date: new Date(),
        });

        return await gameResult.save();
    }

    async getPlayerStats(player: Players): Promise<{ wins: number, losses: number, draws: number }> {
        const results = await GameResultModel.find({ player });
        
        return {
            wins: results.filter(r => r.result === GameResult.WIN).length,
            losses: results.filter(r => r.result === GameResult.LOSE).length,
            draws: results.filter(r => r.result === GameResult.DRAW).length
        };
    }

    async getGameResults(): Promise<IGameResult[]> {
        return GameResultModel.find().sort({ gameNumber: -1 });
    }
}
