import { TestBed } from '@angular/core/testing';

import { HuggingchatService } from './huggingchat.service';

describe('HuggingchatService', () => {
  let service: HuggingchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuggingchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
