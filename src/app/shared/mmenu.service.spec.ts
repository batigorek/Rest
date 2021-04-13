import { TestBed } from '@angular/core/testing';

import { MmenuService } from './mmenu.service';

describe('MmenuService', () => {
  let service: MmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
