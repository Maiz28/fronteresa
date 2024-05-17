import { TestBed } from '@angular/core/testing';

import { Inactivity.Service.TsService } from './inactivity.service.ts.service';

describe('Inactivity.Service.TsService', () => {
  let service: Inactivity.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inactivity.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
