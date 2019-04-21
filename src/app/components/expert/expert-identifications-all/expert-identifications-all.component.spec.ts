import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertIdentificationsAllComponent } from './expert-identifications-all.component';

describe('ExpertIdentificationsAllComponent', () => {
  let component: ExpertIdentificationsAllComponent;
  let fixture: ComponentFixture<ExpertIdentificationsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertIdentificationsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertIdentificationsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
