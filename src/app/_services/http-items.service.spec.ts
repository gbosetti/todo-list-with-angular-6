import { TestBed, inject } from '@angular/core/testing';

import { HttpItemsService } from './http-items.service';

describe('HttpItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpItemsService]
    });
  });

  it('should be created', inject([HttpItemsService], (service: HttpItemsService) => {
    expect(service).toBeTruthy();
  }));
});
