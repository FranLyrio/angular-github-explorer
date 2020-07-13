import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

export interface Repository {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  }
}
export interface Informations {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export interface RepositoryParams {
  repository: string;
}

export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'https://api.github.com';

  public repository;

  constructor(public route: ActivatedRoute, public api: HttpClient) {}

  readRepository(newRepo: string): Promise<Repository> {
    return this.api.get<Repository>(`${this.url}/repos/${newRepo}`).toPromise();
  }

  readInformation(repositoryName: string): Promise<Informations> {
    return this.api.get<Informations>(`${this.url}/repos/${repositoryName}`).toPromise();
  }
}
