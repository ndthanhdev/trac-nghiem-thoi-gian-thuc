import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedQuestionComponent } from './prepared-question.component';

describe('PreparedQuestionComponent', () => {
  let component: PreparedQuestionComponent;
  let fixture: ComponentFixture<PreparedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
