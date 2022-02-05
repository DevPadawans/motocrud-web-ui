import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './presentation/view/shared/header/top-menu/top-menu.component';
import { SidenavMenuComponent } from './presentation/view/shared/sidenav/sidenav-menu/sidenav-menu.component';
import { SidenavTopMenuComponent } from './presentation/view/shared/sidenav/sidenav-top-menu/sidenav-top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SidenavTopMenuComponent,
    SidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
