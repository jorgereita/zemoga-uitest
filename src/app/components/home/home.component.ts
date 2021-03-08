import { Component, OnInit } from '@angular/core';
import { ICardVote } from './../card-vote/card.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public cardsVoteArray: ICardVote[] =[
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

  constructor(private router: Router,public translate: TranslateService,) { }
  goOther(){
    this.router.navigate(['/other']);
  }
  ngOnInit(): void {

  }

}
