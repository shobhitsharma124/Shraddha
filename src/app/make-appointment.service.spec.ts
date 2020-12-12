import { TestBed } from '@angular/core/testing';

import { MakeAppointmentService } from './make-appointment.service';

describe('MakeAppointmentService', () => {
  let service: MakeAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
