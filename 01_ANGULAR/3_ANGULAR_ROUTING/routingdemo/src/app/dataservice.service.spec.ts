import { TestBed, inject } from '@angular/core/testing';

import { DataserviceService } from './dataservice.service';

describe('DataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataserviceService]
    });
  });

  it('should be created', inject([DataserviceService], (service: DataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
