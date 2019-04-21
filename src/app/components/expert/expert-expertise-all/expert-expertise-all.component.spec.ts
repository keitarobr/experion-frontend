import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertExpertiseAllComponent } from './expert-expertise-all.component';

describe('ExpertExpertiseAllComponent', () => {
  let component: ExpertExpertiseAllComponent;
  let fixture: ComponentFixture<ExpertExpertiseAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertExpertiseAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertExpertiseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
