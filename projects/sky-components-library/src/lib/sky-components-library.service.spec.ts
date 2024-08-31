import { TestBed } from '@angular/core/testing';

import { SkyComponentsLibraryService } from './sky-components-library.service';

describe('SkyComponentsLibraryService', () => {
  let service: SkyComponentsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyComponentsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
