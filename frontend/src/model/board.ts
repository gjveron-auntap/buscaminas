import { Cell } from './cell';

export interface Board {
    width: number;
    height: number;
    cells: Cell[];
}