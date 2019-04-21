import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEvidenceAllComponent } from './expert-evidence-all.component';

describe('ExpertEvidenceAllComponent', () => {
  let component: ExpertEvidenceAllComponent;
  let fixture: ComponentFixture<ExpertEvidenceAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertEvidenceAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertEvidenceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
