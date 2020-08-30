import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcraftComponent } from './starcraft.component';

describe('StarcraftComponent', () => {
  let component: StarcraftComponent;
  let fixture: ComponentFixture<StarcraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
