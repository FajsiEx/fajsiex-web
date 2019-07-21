import { TestBed } from '@angular/core/testing';

import { WanillaService } from './wanilla.service';

describe('WanillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WanillaService = TestBed.get(WanillaService);
    expect(service).toBeTruthy();
  });
});
