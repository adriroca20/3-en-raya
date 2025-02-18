import mongoose from 'mongoose';
import { GameResult } from '../interfaces/GameResult';

const gameResultSchema = new mongoose.Schema<GameResult>({
    player: { type: String, required: true },
    result: { type: String, enum: ['win', 'lose', 'draw'], required: true },
    date: { type: Date, default: Date.now }
});

export const GameResultModel = mongoose.model<GameResult>('GameResult', gameResultSchema); 