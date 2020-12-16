import { TestBed } from '@angular/core/testing';

import { RisquesServiceService } from './risques-service.service';

// @ts-ignore
describe('RisquesServiceService', () => {
  let service: RisquesServiceService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisquesServiceService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
