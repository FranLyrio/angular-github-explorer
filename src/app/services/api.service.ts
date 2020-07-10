import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Repository {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'https://api.github.com';

  constructor(private api: HttpClient) {}

  readRepository(newRepo: string): Promise<Repository> {
    return this.api.get<Repository>(`${this.url}/repos/${newRepo}`).toPromise();
  }
}
