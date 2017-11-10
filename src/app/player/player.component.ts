import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {

  @Input() player:Player;
  showInput = false;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  	this.playerService.scoreUpdated.subscribe(
  		()=>{
          this.player.score += this.player.transaction;
          this.player.transaction = 0;
  		}
  	)
  }

  onBlurMethod(){
    this.showInput = !this.showInput;
    if((this.player.score + this.player.transaction ) < this.playerService.transactionStep)
    {
      this.player.transaction = this.player.score*-1;
    }
    this.playerService.checkScoresValidity();
  }


  updateTransaction(caseTransaction:String){
    if(caseTransaction == 'sub'){
      if((this.player.score + this.player.transaction ) < this.playerService.transactionStep)
      {
        this.player.transaction = this.player.score*-1;
      }else{
        this.player.transaction -= this.playerService.transactionStep;
      }
    }else{
      this.player.transaction += this.playerService.transactionStep;
    }
    this.playerService.checkScoresValidity();
  }

}
