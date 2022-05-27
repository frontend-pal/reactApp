import { TestBed } from '@angular/core/testing';

import { ApiMercadolibreService } from './api-mercadolibre.service';

describe('ApiMercadolibreService', () => {
  let service: ApiMercadolibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMercadolibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
