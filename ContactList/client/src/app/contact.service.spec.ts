/*************************************************************************/
/******************** @author : Nitesh Singh Rajput **********************/
/*************************************************************************/

import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';

//contact service test

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
