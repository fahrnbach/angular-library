import { TestBed } from '@angular/core/testing';

import { FlexSearchService } from './flex-search.service';

describe('FlexSearchService', () => {
  let service: FlexSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
