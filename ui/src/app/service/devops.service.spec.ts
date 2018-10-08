import { TestBed, inject } from '@angular/core/testing';

import { DevopsService } from './devops.service';

describe('ContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevopsService]
    });
  });

  it('should be created', inject([DevopsService], (service: DevopsService) => {
    expect(service).toBeTruthy();
  }));
});
