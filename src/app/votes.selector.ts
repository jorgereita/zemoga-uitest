import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';


const getData = (state: AppState): any => state.data;

export const gerStateData = createSelector(
    (state: {appState: AppState }) => state.appState,
    getData
);

