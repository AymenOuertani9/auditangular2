import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';

// @ts-ignore
describe('UserServiceService', () => {
  let service: UserServiceService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
