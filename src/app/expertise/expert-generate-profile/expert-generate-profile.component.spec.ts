import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertGenerateProfileComponent } from './expert-generate-profile.component';

describe('ExpertGenerateProfileComponent', () => {
  let component: ExpertGenerateProfileComponent;
  let fixture: ComponentFixture<ExpertGenerateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertGenerateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertGenerateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
