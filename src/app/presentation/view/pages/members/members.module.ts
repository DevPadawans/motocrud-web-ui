import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AppMaterialModule
  ]
})
export class MembersModule { }
