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
 editNames = false;
 showScores = true;
 editButtonColor(){
  return this.editNames? "":"accent";
 }
 // showScores = false;
 constructor(private playerService: PlayerService){}
 ngOnInit(){
  this.players = this.playerService.getPlayers();
  this.screenShots = this.playerService.getScreenShots();
 }
 addPlayer(){
  if(this.playerName!=''){
    this.playerService.addPlayer(new Player(this.playerName,100000))
    this.show=false;
    this.playerName = '';
  }
 }
 updateScore(){
  this.playerService.updateScore();
  window.scrollBy(0, 20000);
 }
 clearHistory(){
    this.playerService.transactionStep = 500;
 	  this.playerService.clearHistory();
 	  this.players = this.playerService.getPlayers();
  	this.screenShots = this.playerService.getScreenShots();
    this.show=false;
    this.editNames=false;
    this.showScores = true;
    this.playerName = '';
 }
}