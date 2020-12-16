import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireComponent } from './commentaire.component';

// @ts-ignore
describe('CommentaireComponent', () => {
  let component: CommentaireComponent;
  let fixture: ComponentFixture<CommentaireComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireComponent ]
    })
    .compileComponents();
  });

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
