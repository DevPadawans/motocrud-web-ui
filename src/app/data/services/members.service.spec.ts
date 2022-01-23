/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MembersService } from './members.service';

describe('Service: Members', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersService]
    });
  });

  it('should ...', inject([MembersService], (service: MembersService) => {
    expect(service).toBeTruthy();
  }));
});
