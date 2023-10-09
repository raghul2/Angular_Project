import { TestBed } from '@angular/core/testing';

import { EmployeedataserviceService } from './employeedataservice.service';

describe('EmployeedataserviceService', () => {
  let service: EmployeedataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
