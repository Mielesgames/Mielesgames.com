import { TestBed } from '@angular/core/testing';

import { GlobalListService } from './global-list.service';

describe('GlobalListService', () => {
  let service: GlobalListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
