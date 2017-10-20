import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player:Player;
  transaction = 0;
  minus = false;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  	this.playerService.scoreUpdated.subscribe(
  		()=>{
  			if(this.minus){
          this.player.score -= this.transaction;
        }else{
          this.player.score += this.transaction;
        }
  			this.transaction = 0;
  		}
  	)
  }

}
