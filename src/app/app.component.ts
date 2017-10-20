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
 show = false;
 playerName='';
 constructor(private playerService: PlayerService){}
 ngOnInit(){
  this.players = this.playerService.getPlayers();
  this.screenShots = this.playerService.getScreenShots();
 }
 addPlayer(){
  if(this.playerName!=''){
    this.playerService.addPlayer(new Player(this.playerName,2000))
    this.show=false;
    this.playerName = '';
  }
 }
 updateScore(){
  this.playerService.updateScore();
  window.scrollBy(0, 20000);
 }
 clearHistory(){
 	  this.playerService.clearHistory();
 	  this.players = this.playerService.getPlayers();
  	this.screenShots = this.playerService.getScreenShots();
    this.show=false;
    this.playerName = '';
 }
}