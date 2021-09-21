import { TestBed } from '@angular/core/testing';

import { InsumoServicesService } from './insumo-services.service';

describe('InsumoServicesService', () => {
  let service: InsumoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsumoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
