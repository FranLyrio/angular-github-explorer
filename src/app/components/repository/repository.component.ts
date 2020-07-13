import { Component, OnInit, OnDestroy } from '@angular/core';

import { ApiService, Informations, Issue } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})

export class RepositoryComponent implements OnInit, OnDestroy {
  public subscriptionRouter: Subscription;

  public repository: Informations;

  public issues: Issue;

  constructor(public api: ApiService, public activatedRoute: ActivatedRoute, public route: Router) {}

  ngOnInit() {
    this.subscriptionRouter = this.activatedRoute.queryParams
    .subscribe(params => {
     this.api.readInformation(params.repositoryName).then(response => {
       this.repository = response;
     })
    });

    this.subscriptionRouter = this.activatedRoute.queryParams.subscribe(params => {
      this.api.readIssue(params.repositoryName).then(response => {
        this.issues = response;
      })
    });
  }

  ngOnDestroy(): void {
    this.subscriptionRouter.unsubscribe();
  }
}
