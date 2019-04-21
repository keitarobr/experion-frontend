import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCollectEvidencesComponent } from './expert-collect-evidences.component';

describe('ExpertCollectEvidencesComponent', () => {
  let component: ExpertCollectEvidencesComponent;
  let fixture: ComponentFixture<ExpertCollectEvidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertCollectEvidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCollectEvidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
