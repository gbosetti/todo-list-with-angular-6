import { TestBed, inject } from '@angular/core/testing';

import { HttpsItemsService } from './https-items.service';

describe('HttpsItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpsItemsService]
    });
  });

  it('should be created', inject([HttpsItemsService], (service: HttpsItemsService) => {
    expect(service).toBeTruthy();
  }));
});
