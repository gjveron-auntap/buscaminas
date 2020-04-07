import { Board } from './board';

export interface Game {
    running: boolean;
    isWin: boolean;
    isLose: boolean;
    board: Board;
}
