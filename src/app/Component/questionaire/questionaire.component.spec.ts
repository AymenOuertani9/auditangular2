import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireComponent } from './questionaire.component';

// @ts-ignore
describe('QuestionaireComponent', () => {
  let component: QuestionaireComponent;
  let fixture: ComponentFixture<QuestionaireComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireComponent ]
    })
    .compileComponents();
  });

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
