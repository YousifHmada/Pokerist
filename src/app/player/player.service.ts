import { Injectable, EventEmitter } from '@angular/core';
import {Player} from './player';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  screenShots = [];
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
  	localStorage.setItem('players',JSON.stringify(this.players));
    localStorage.setItem('screenShots',JSON.stringify(this.screenShots));
  }
  getScreenShots(){
  	return this.screenShots;
  }
  clearHistory(){
  	localStorage.removeItem('players');
    localStorage.removeItem('screenShots');
  	this.players = [];
  	this.screenShots = [];
  }
}

