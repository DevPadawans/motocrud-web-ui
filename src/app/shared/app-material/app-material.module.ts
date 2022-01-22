import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule
  ], // note the imports
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
  ]
})
export class AppMaterialModule { }
