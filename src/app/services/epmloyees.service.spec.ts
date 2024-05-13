import { TestBed } from '@angular/core/testing';

import { EpmloyeesService } from './epmloyees.service';

describe('EpmloyeesService', () => {
  let service: EpmloyeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpmloyeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
