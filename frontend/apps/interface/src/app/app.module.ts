import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule, NgxsModuleOptions } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { environment } from '../environments/environment';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { DashboardModule } from './dashboard/dashboard.module';

export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsModule.forRoot([], ngxsConfig),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
