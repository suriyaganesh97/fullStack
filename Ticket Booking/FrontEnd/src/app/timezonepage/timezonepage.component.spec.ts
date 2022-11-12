import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezonepageComponent } from './timezonepage.component';

describe('TimezonepageComponent', () => {
  let component: TimezonepageComponent;
  let fixture: ComponentFixture<TimezonepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezonepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezonepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
