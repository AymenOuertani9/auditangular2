import { TestBed } from '@angular/core/testing';

import { ExcelServiceService } from './excel-service.service';

// @ts-ignore
describe('ExcelServiceService', () => {
  let service: ExcelServiceService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelServiceService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
