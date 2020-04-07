import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'; 
import { Game } from 'src/model/game';
import { Cell } from 'src/model/cell';

@Injectable({
  providedIn: 'root'
})
export class BuscaminasService {
  url = (<any>window || {}).backend_url || "http://127.0.0.1:3000";
  constructor(private httpClient: HttpClient) { }

  public postGame() {
    return this.httpClient.post<{ game: Game }>(`${this.url}/game`, null).pipe(tap(d => {
      localStorage.setItem('game', JSON.stringify(d.game));
    }));
  }

  public putCellUncover(cell: Cell, game: Game) {
    return this.httpClient.put<{ game: Game }>(`${this.url}/game/uncoverCell/${cell.id}`, { game: game }).pipe(tap(d => {
      localStorage.setItem('game', JSON.stringify(d.game));
    }));
  }

  public loadGame() {
    let game: Game = JSON.parse(localStorage.getItem('game')) as Game;
    return game;
  }

  public deleteGame() {
    localStorage.removeItem('game');
  }

  public isGameExists() {
    return !!localStorage.getItem('game');
  }

}
