import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertGenerateExpertiseComponent } from './expert-generate-expertise.component';

describe('ExpertGenerateExpertiseComponent', () => {
  let component: ExpertGenerateExpertiseComponent;
  let fixture: ComponentFixture<ExpertGenerateExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertGenerateExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertGenerateExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
