import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRisqueComponent } from './new-risque.component';

describe('NewRisqueComponent', () => {
  let component: NewRisqueComponent;
  let fixture: ComponentFixture<NewRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRisqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
