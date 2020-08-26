import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTimelineComponent } from './plant-timeline.component';

describe('PlantTimelineComponent', () => {
  let component: PlantTimelineComponent;
  let fixture: ComponentFixture<PlantTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
