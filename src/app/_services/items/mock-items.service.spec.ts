import { TestBed, inject } from '@angular/core/testing';

import { MockItemsService } from './mock-items.service';

describe('MockItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockItemsService]
    });
  });

  it('should be created', inject([MockItemsService], (service: MockItemsService) => {
    expect(service).toBeTruthy();
  }));
});
