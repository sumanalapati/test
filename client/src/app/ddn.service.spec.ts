import { TestBed } from '@angular/core/testing';

import { DdnService } from './ddn.service';

describe('DdnService', () => {
  let service: DdnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
