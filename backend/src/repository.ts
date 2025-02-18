import { GameResult } from "./enums/GameResult";
import { Players } from "./enums/Players";
import { IGameResult } from "./interfaces/IGameResult";
import { GameResultModel } from "./models/GameResult";

export class GameRepository {
    async saveGameResult(player: Players, result: GameResult): Promise<IGameResult> {
        const gameResult = new GameResultModel({
            player,
            result,
            date: new Date()
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

    async getGameResults(): Promise<GameResult[]> {
        return GameResultModel.find();
    }
}
