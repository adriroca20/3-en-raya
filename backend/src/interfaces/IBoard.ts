import { Players } from "../enums/Players";

export interface Board {
    squares: Array<Players | null>;
}