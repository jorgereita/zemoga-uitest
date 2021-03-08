import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVoteComponent } from './card-vote.component';

describe('CardVoteComponent', () => {
  let component: CardVoteComponent;
  let fixture: ComponentFixture<CardVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate Item Percent', () => {
    component.cardsVote = createElement()[0];
    expect(component.parsePercent(component.cardsVote.percentup)).toEqual(20);
  });
  it('validate Thumb up', () => {
    component.cardsVote = createElement()[0];
    component.thumbUp(component.cardsVote);
    expect(component.cardsVote.prevotestate).toEqual(1);
  });
  it('validate Thumb up', () => {
    component.cardsVote = createElement()[0];
    component.thumbDown(component.cardsVote);
    expect(component.cardsVote.prevotestate).toEqual(1);
  });
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  function createElement(): any {
    return [
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
    ];
  };

});
