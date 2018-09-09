import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMoneyMainComponent } from './track-money-main.component';

describe('TrackMoneyMainComponent', () => {
  let component: TrackMoneyMainComponent;
  let fixture: ComponentFixture<TrackMoneyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMoneyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMoneyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
