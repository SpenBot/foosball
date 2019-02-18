import { TestBed, inject } from '@angular/core/testing';

import { TurtlesService } from './turtles.service';

describe('TurtlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurtlesService]
    });
  });

  it('should be created', inject([TurtlesService], (service: TurtlesService) => {
    expect(service).toBeTruthy();
  }));
});
