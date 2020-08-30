import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMonsterComponent } from './hero-monster.component';

describe('HeroMonsterComponent', () => {
  let component: HeroMonsterComponent;
  let fixture: ComponentFixture<HeroMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
