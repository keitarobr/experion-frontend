import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFindByNameComponent } from './expert-find-by-name.component';

describe('ExpertFindByNameComponent', () => {
  let component: ExpertFindByNameComponent;
  let fixture: ComponentFixture<ExpertFindByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertFindByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFindByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
