import { TestBed } from '@angular/core/testing';

import { UltimaService } from './ultima.service';

describe('UltimaService', () => {
  let service: UltimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
