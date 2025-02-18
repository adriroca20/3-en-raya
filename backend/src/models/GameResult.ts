import mongoose from 'mongoose';
import { GameResult } from '../enums/GameResult';
import { Players } from '../enums/Players';
import { IGameResult } from '../interfaces/IGameResult';

const gameResultSchema = new mongoose.Schema<IGameResult>({
    player: { type: String, enum: Object.values(Players), required: true },
    result: { type: String, enum: Object.values(GameResult), required: true },
    date: { type: Date, default: Date.now }
});

export const GameResultModel = mongoose.model<IGameResult>('GameResult', gameResultSchema); 