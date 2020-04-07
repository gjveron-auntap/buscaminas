import { Component, OnInit } from '@angular/core';
import { BuscaminasService } from '../buscaminas.service';
import { Game } from 'src/model/game';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.less']
})
export class PlayComponent implements OnInit {
  game: Game = null;

  constructor(private buscaminasService: BuscaminasService) { }

  ngOnInit(): void {
    this.game = this.buscaminasService.loadGame();
    if (!this.game) {
      this.buscaminasService.postGame().subscribe((data) => {
        this.game = data.game;
      });
    }
  }

  uncoverCell(cell) {
    if(this.game.running){
      this.buscaminasService.putCellUncover(cell, this.game).subscribe((data) => {
        this.game = data.game;
      });
    }
  }

}
