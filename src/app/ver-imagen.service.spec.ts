import { TestBed } from '@angular/core/testing';

import { VerImagenService } from './ver-imagen.service';

describe('VerImagenService', () => {
  let service: VerImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
