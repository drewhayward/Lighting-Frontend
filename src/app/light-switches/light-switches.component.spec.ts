import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchesComponent } from './light-switches.component';

describe('LightSwitchesComponent', () => {
  let component: LightSwitchesComponent;
  let fixture: ComponentFixture<LightSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
