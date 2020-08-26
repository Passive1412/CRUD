import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonGameComponent } from './python-game.component';

describe('PythonGameComponent', () => {
  let component: PythonGameComponent;
  let fixture: ComponentFixture<PythonGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
