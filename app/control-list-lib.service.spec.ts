import { TestBed } from '@angular/core/testing';

import { ControlListLibService } from './control-list-lib.service';

describe('ControlListLibService', () => {
  let service: ControlListLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlListLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
