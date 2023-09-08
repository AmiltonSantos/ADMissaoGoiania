import { TestBed } from '@angular/core/testing';

import { ConnectBibliaService } from './connect-biblia.service';

describe('ConnectBibliaService', () => {
  let service: ConnectBibliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectBibliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
