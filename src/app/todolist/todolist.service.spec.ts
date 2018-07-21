import { TestBed, inject } from '@angular/core/testing';

import { TodolistService } from './todolist.service';

describe('TodolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistService]
    });
  });

  it('should be created', inject([TodolistService], (service: TodolistService) => {
    expect(service).toBeTruthy();
  }));
});
