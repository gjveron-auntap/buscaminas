import { Component, OnInit } from '@angular/core';
import { BuscaminasService } from '../buscaminas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  gameRunning = false;

  constructor(private buscaminasService: BuscaminasService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameRunning = this.buscaminasService.isGameExists();
  }

  newGame (){
    this.buscaminasService.deleteGame();
    this.router.navigate(['/play']);
  }

  continue() {
    this.router.navigate(['/play']);
  }

  delete() {
    this.buscaminasService.deleteGame();
    this.gameRunning = this.buscaminasService.isGameExists();

  }
}
