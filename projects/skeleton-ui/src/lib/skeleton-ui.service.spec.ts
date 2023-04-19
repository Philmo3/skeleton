import { TestBed } from '@angular/core/testing';

import { SkeletonUiService } from './skeleton-ui.service';

describe('SkeletonUiService', () => {
  let service: SkeletonUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkeletonUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
