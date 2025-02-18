export interface INextMove {
  updatedBoard: Board;
  gameStatus: { winner: Players | null; isGameOver: boolean };
}
export interface Board {
  squares: Array<Players | null>;
}
export interface IGameResult {
  winner: Players | "draw";
  date: string;
}

export enum Players {
  X = "X",
  O = "O",
}
