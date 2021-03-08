import { Observable } from 'rxjs';
import { of } from 'rxjs';
export class VoteService {
    constructor(){}
    getDataVotes(): Observable<any>{
        const data$ = [
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
          ];
        return of(data$);
    }
}
