import { TestBed } from '@angular/core/testing';

import { MediaScreenService } from './media-screen.service';

describe('MediaScreenService', () => {
  let service: MediaScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
