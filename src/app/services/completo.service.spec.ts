import { TestBed } from '@angular/core/testing';

import { CompletoService } from './completo.service';

describe('CompletoService', () => {
  let service: CompletoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
