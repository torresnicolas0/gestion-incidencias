import { TestBed } from '@angular/core/testing';

import { IncidentModalService } from './incident-modal.service';

describe('IncidentModalService', () => {
  let service: IncidentModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
