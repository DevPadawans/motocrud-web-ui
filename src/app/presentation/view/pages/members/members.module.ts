import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/app-material.module';

import { SharedModule } from './../../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';
import { MembersListComponent } from './members-list/members-list.component';
import { MembersAddEditComponent } from './members-add-edit/members-add-edit.component';


@NgModule({
  declarations: [
    MembersListComponent,
    MembersAddEditComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MembersModule { }
