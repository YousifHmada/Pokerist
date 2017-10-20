import {Component, EventEmitter, OnInit} from '@angular/core';
import {Player} from './player/player';
import {PlayerService} from "./player/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PlayerService]
})




export class AppComponent implements OnInit{
 players: Player[] = [];
 screenShots = [];
 constructor(private playerService: PlayerService){}
 ngOnInit(){
  this.players = this.playerService.getPlayers();
  this.screenShots = this.playerService.getScreenShots();
 }
 addPlayer(){
  this.playerService.addPlayer(new Player("ahmed",2000))
  console.log(this.screenShots);
 }
 updateScore(){
  console.log(this.screenShots);
  this.playerService.updateScore();
  window.scrollBy(0, 20000);
 }
 clearHistory(){
 	this.playerService.clearHistory();
 	this.players = this.playerService.getPlayers();
  	this.screenShots = this.playerService.getScreenShots();
 }
}