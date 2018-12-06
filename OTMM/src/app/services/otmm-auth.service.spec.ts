import { TestBed, inject } from '@angular/core/testing';

import { OtmmAuth } from './otmm-auth.service';

describe('OtmmAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtmmAuth]
    });
  });

  it('should be created', inject([OtmmAuth], (service: OtmmAuth) => {
    expect(service).toBeTruthy();
  }));
});
