import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RepositoryComponent } from './components/repository/repository.component'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'repositories',
    component: RepositoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
