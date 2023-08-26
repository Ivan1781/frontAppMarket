import { TestBed } from '@angular/core/testing';

import { DescriptionCommodityService } from './description-commodity.service';

describe('DescriptionCommodityService', () => {
  let service: DescriptionCommodityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionCommodityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
