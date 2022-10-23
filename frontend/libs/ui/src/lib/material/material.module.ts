import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { MaterialIconsRegistryService } from './services';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

const IMPORTED_AND_EXPORTED_MODULES = [
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSelectModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  OverlayModule,
  A11yModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  CdkTableModule,
  MatTableModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  ClipboardModule,
  DragDropModule,
  MatSortModule
];

@NgModule({
  imports: [
    IMPORTED_AND_EXPORTED_MODULES
  ],
  exports: [
    IMPORTED_AND_EXPORTED_MODULES
  ]
})
export class MaterialModule {
  constructor(private readonly iconsRegistry: MaterialIconsRegistryService) {
    this.iconsRegistry.register();
  }
}
