import { Action, createAction, props } from '@ngrx/store';

export const voteGetData = createAction('[Voting] Get data',props<{data: any}>()) ;
export const voteUpSuccess = createAction('[Voting] Vote event dispatch',props<{data: any}>()) ;

