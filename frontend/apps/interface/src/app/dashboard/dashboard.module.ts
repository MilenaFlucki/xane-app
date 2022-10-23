import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiModule } from '@frontend/ui';
import { UserInformationComponent } from './user-information/user-information.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserInformationComponent,
    MembersComponent,
  ],
  imports: [CommonModule, UiModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
