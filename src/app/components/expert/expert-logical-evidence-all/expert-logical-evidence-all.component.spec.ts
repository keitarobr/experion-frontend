import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLogicalEvidenceAllComponent } from './expert-logical-evidence-all.component';

describe('ExpertLogicalEvidenceAllComponent', () => {
  let component: ExpertLogicalEvidenceAllComponent;
  let fixture: ComponentFixture<ExpertLogicalEvidenceAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertLogicalEvidenceAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertLogicalEvidenceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
