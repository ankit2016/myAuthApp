import { TestBed } from '@angular/core/testing';

import { DetailPageResolverService } from './detail-page-resolver.service';

describe('DetailPageResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailPageResolverService = TestBed.get(DetailPageResolverService);
    expect(service).toBeTruthy();
  });
});
