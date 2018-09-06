import { TestBed, inject } from '@angular/core/testing';

import { AbstractItemsService } from './abstract-items.service';

describe('AbstractItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractItemsService]
    });
  });

  it('should be created', inject([AbstractItemsService], (service: AbstractItemsService) => {
    expect(service).toBeTruthy();
  }));
});
