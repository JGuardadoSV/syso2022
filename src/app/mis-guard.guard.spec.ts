import { TestBed } from '@angular/core/testing';

import { MisGuardGuard } from './mis-guard.guard';

describe('MisGuardGuard', () => {
  let guard: MisGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MisGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
