import { TestBed } from '@angular/core/testing';

import { MovieApiServiceService } from './movie-api-service.service';

describe('MovieApiServiceService', () => {
  let service: MovieApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
