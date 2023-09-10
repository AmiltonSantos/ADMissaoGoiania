import { TestBed } from '@angular/core/testing';

import { ConnectHarpaService } from './connect-harpa.service';

describe('ConnectHarpaService', () => {
  let service: ConnectHarpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectHarpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
