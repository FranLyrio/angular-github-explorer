import { Component, OnInit } from '@angular/core';
import { ApiService, Repository, Issue } from '../../services/api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  public newRepo;

  public repositories: Repository[] = [];

  constructor(public api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  async handleAddRepository($event) {
    $event.preventDefault();

    const response: Repository = await this.api.readRepository(this.newRepo);

    this.repositories.push(response);
    this.newRepo = '';
  }

  handleReadRepository(repository: Repository) {
    this.router.navigate(['/repositories'], { queryParams: { repositoryName: repository.full_name } });
  }
}
