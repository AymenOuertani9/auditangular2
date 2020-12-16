import { TestBed } from '@angular/core/testing';

import { AjoutRendezVousService } from './ajout-rendez-vous.service';

describe('AjoutRendezVousService', () => {
  let service: AjoutRendezVousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutRendezVousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
