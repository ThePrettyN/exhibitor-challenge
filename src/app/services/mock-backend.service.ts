import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService implements InMemoryDbService {
  createDb() {
    const data = [
      { id: 1, S_event: 1, name: 'company1' },
      { id: 2, S_event: 1, name: 'company2' },
      { id: 3, S_event: 1, name: 'company3' },
      { id: 4, S_event: 2, name: 'company4' },
      { id: 5, S_event: 2, name: 'company5' },
      { id: 6, S_event: 2, name: 'company6' },
    ];

    return { 'exhibitor-company-list': data };
  }
}
