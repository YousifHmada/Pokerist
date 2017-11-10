import { Injectable, EventEmitter } from '@angular/core';
import {Player} from './player';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  screenShots = [];
  transactionStep:number = 500;
  scoreValid = true;
  constructor() {
  	if(localStorage.getItem('screenShots')!=null&&localStorage.getItem('players')!=null){
  		this.players = JSON.parse(localStorage.getItem('players'));
  		this.screenShots = JSON.parse(localStorage.getItem('screenShots'));
  	}
  }
  scoreUpdated = new EventEmitter<any>();
  getPlayers(){
  	return this.players;
  }
  addPlayer(player:Player){
  	this.players.push(player);
  	let screenShot = [];
  	this.players.forEach((player)=>{
  		screenShot.push(player.score);
  	});
  	this.screenShots[0]= screenShot;
  	localStorage.setItem('players',JSON.stringify(this.players));
    localStorage.setItem('screenShots',JSON.stringify(this.screenShots));
  }
  updateScore(){
  	this.scoreUpdated.emit();
  	let screenShot = [];
  	this.players.forEach((player)=>{
  		screenShot.push(player.score);
  	});
  	this.screenShots.push(screenShot);
    if(this.screenShots.length % 10 == 0){
      this.transactionStep *= 2;
    }
  	localStorage.setItem('players',JSON.stringify(this.players));
    localStorage.setItem('screenShots',JSON.stringify(this.screenShots));
  }
  getScreenShots(){
  	return this.screenShots;
  }
  checkScoresValidity(){
    var result = 0;
    this.players.forEach(function(player){
      result += player.transaction;
    });
    if(result == 0){
      this.scoreValid =  true;
    }else{
      this.scoreValid =  false;
    }   
  }
  clearHistory(){
  	localStorage.removeItem('players');
    localStorage.removeItem('screenShots');
  	this.players = [];
  	this.screenShots = [];
  }
}

