import { TestBed } from '@angular/core/testing';

import { NewLibraryService } from './new-library.service';

describe('NewLibraryService', () => {
  let service: NewLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
