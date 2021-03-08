import { Component, Input, OnInit } from '@angular/core';
import { ICardVote } from '../card-vote/card.interface';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { fromRoot } from '../../index.votes';

@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrls: ['./card-vote.component.sass']
})
export class CardVoteComponent implements OnInit {
  @Input() cardsVote: ICardVote;
  dato$: Observable<any>;
  constructor(
    private translateService: TranslateService,
    public translate: TranslateService,
    private store: Store<AppState>) {
      this.dato$ = store.select('mensaje');
    }
  ngOnInit(): void {
  }

  getBackground(imgUrl) {
    return { background : 'url(' + imgUrl + '.png) center center no-repeat', 'background-size': 'cover' } ;
  };
  setWidthPercent(voteData) {
    const reliav = (voteData.percentup *100 ) + '% ' + (voteData.percentdown *100 ) + '%' ;
    return { 'grid-template-columns': reliav} ;
  }
  parsePercent(percentValue){
    const res = Math.round(percentValue * 100);
    return res;
  }
  thumbUp(voteData){
    voteData.prevotestate = 1 ;
  }
  thumbDown(voteData){
    voteData.prevotestate = 2 ;
  }
  takeVote(voteData){
    if(voteData.prevotestate === 1){
      voteData.percentup = voteData.percentup + 0.01;
      voteData.percentdown = voteData.percentdown - 0.01;
      voteData.votestate = true;
      alert(this.translateService.instant('VOTING_OK'));
      this.store.dispatch({type: 'Thumb up for '+voteData.name});
    }
    else if(voteData.prevotestate === 2){
      voteData.percentup = voteData.percentup - 0.01;
      voteData.percentdown = voteData.percentdown + 0.01;
      voteData.votestate = true;
      alert(this.translateService.instant('VOTING_OK'));
      this.store.dispatch({type: 'Thumb down for '+voteData.name});
    }
    else{
      alert(this.translateService.instant('ERROR_VOTE'));
    }
  }
  voteAgain(voteData){
    voteData.votestate = false;
  }
}
