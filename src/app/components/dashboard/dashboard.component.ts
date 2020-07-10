import { Component, OnInit } from '@angular/core';
import { ApiService, Repository } from '../../services/api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public newRepo;

  public repositories: Repository[] = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  async handleAddRepository($event) {
    $event.preventDefault();

    const response: Repository = await this.api.readRepository(this.newRepo);

    this.repositories.push(response);
    this.newRepo = '';
  }

}
