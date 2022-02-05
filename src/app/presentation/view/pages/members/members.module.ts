import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/app-material.module';

import { SharedModule } from './../../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MembersModule { }
