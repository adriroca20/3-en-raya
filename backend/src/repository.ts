import { GameResult } from "./interfaces/GameResult";
import { GameResultModel } from "./models/GameResult";

export class GameRepository {
    async saveGameResult(player: string, result: 'win' | 'lose' | 'draw'): Promise<GameResult> {
        const gameResult = new GameResultModel({
            player,
            result,
            date: new Date()
        });

        return await gameResult.save();
    }

    async getPlayerStats(player: string): Promise<{ wins: number, losses: number, draws: number }> {
        const results = await GameResultModel.find({ player });
        
        return {
            wins: results.filter(r => r.result === 'win').length,
            losses: results.filter(r => r.result === 'lose').length,
            draws: results.filter(r => r.result === 'draw').length
        };
    }
}
