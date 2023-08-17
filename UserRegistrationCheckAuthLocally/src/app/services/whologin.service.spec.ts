import { TestBed } from '@angular/core/testing';

import { WhologinService } from './whologin.service';

describe('WhologinService', () => {
  let service: WhologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
