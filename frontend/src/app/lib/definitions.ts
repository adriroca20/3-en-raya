export interface INextMove {
  updatedBoard: Board;
  gameStatus: { winner: Players | null; isGameOver: boolean };
}
export interface Board {
  squares: Array<Players | null>;
}
export interface IGameResult {
  player: Players;
  result: GameResult;
  date: string;
}

export enum GameResult {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

export enum Players {
  X = "X",
  O = "O",
}
