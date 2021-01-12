import { TestBed } from '@angular/core/testing';

import { ServicioComponenteService } from './servicio-componente.service';

describe('ServicioComponenteService', () => {
  let service: ServicioComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
