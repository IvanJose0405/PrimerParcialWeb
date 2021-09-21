import { TestBed } from '@angular/core/testing';

import { ContratoServiceService } from './contrato-service.service';

describe('ContratoServiceService', () => {
  let service: ContratoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
