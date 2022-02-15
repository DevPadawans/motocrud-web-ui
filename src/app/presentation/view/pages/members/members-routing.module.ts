import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersAddEditComponent } from './members-add-edit/members-add-edit.component';

import { MembersListComponent } from './members-list/members-list.component';

const routes: Routes = [
  {path: '', component:MembersListComponent},
  {path: 'add', component:MembersAddEditComponent},
  {path: 'edit', component:MembersAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
