/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, first, map, switchMap, mergeMap, tap, } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { VoteService } from './votes.service';
import { voteGetData, voteUpSuccess } from './votes.action';


@Injectable()

export class VoteEffects {
    constructor(
        private actions$: Actions,
    ) { }

    // getVoteDataEffect$ = createEffect(() => this.actions$.pipe(
    //     ofType(voteGetData),
    //     switchMap((action) => {
    //         console.log('merge');
    //         return voteUpSuccess(action.data);
    //     })
    // ));
}
