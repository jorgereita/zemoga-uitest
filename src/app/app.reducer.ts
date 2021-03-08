import { Action, createReducer, on } from '@ngrx/store';
import { voteUpSuccess } from './votes.action';




export interface AppState {
    mensaje: string;
    data: any;
}

const initialState: AppState = {
    mensaje: null,
    data: [
        {
          name: 'Kanye West',
          description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
          datetitle: '1 month ago',
          datedescr: 'in Entertainment',
          percentup: 0.2,
          percentdown: 0.8,
          image: '../../../assets/images/Kayne',
          votestate: false,
          prevotestate: 0
        },
        {
          name: 'Mark Zuckerberg',
          description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
          datetitle: '1 month ago',
          datedescr: 'in Business',
          percentup: 0.4,
          percentdown: 0.6,
          image: '../../../assets/images/Mark',
          votestate: false,
          prevotestate: 0
        },
        {
          name: 'Cristina Fernández de Kirchner',
          description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
          datetitle: '1 month ago',
          datedescr: 'in Politcs',
          percentup: 0.4,
          percentdown: 0.6,
          image: '../../../assets/images/Kristina',
          votestate: false,
          prevotestate: 0
        },
        {
          name: 'Malala Yousafzai',
          description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
          datetitle: '1 month ago',
          datedescr: 'in Entertainment',
          percentup: 0.4,
          percentdown: 0.6,
          image: '../../../assets/images/Malala',
          votestate: false,
          prevotestate: 0
        },
      ]
};
export const miReducer = createReducer(initialState,
    on(voteUpSuccess,(state,action) => ({mensaje:'STATE INIT', data: action.data}))
);

// export const initialState = {
//     mensaje: 'Initial state votes'
// };

// export const miReducer = (state: AppState = initialState, action: Action) => {
//     console.log(action);
//     return state;
// };


