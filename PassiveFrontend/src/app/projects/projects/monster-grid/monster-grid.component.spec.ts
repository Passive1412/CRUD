import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterGridComponent } from './monster-grid.component';

describe('MonsterGridComponent', () => {
  let component: MonsterGridComponent;
  let fixture: ComponentFixture<MonsterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
