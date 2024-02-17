import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetch.service';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';

describe('FetchService', () => {
  let service: FetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
