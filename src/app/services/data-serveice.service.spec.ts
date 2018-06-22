import { TestBed, inject } from '@angular/core/testing';

import { DataServeiceService } from './data-serveice.service';

describe('DataServeiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServeiceService]
    });
  });

  it('should be created', inject([DataServeiceService], (service: DataServeiceService) => {
    expect(service).toBeTruthy();
  }));
});
