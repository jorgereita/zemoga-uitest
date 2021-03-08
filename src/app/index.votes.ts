import { voteUpSuccess ,voteGetData } from './votes.action';
import { miReducer } from './app.reducer';
import { VoteEffects } from './votes.effects';
import { gerStateData } from './votes.selector';
export const fromRoot = {
    voteUpSuccess,
    voteGetData,
    miReducer,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    VoteEffects,
    gerStateData
};
