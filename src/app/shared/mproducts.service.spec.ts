import { TestBed } from '@angular/core/testing';

import { MproductsService } from './mproducts.service';

describe('MproductsService', () => {
  let service: MproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
