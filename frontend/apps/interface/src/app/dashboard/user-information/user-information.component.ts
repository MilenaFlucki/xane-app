import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInformationComponent {
}
