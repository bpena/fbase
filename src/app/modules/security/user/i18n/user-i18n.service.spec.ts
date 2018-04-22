import { TestBed, inject } from '@angular/core/testing';

import { UserI18NService } from './user-i18n.service';

describe('ConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserI18NService]
    });
  });

  it('should be created', inject([UserI18NService], (service: UserI18NService) => {
    expect(service).toBeTruthy();
  }));
});
