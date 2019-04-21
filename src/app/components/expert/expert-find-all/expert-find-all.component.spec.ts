import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFindAllComponent } from './expert-find-all.component';

describe('ExpertFindAllComponent', () => {
  let component: ExpertFindAllComponent;
  let fixture: ComponentFixture<ExpertFindAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertFindAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFindAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
