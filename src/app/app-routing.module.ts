import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {
    path: 'dashboard',
    loadChildren: () => import('./presentation/view/pages/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./presentation/view/pages/members/members.module').then(module => module.MembersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
