import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const BASE_PATH = 'assets/icons/';
const NAMESPACE = 'drg';

@Injectable({
  providedIn: 'root'
})
export class MaterialIconsRegistryService {

  constructor(private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {}

  public register(): void {
    // Add new icons
  }

  private registerSvgIconInNamespace(iconName: string, path: string) {
    this.matIconRegistry
      .addSvgIconInNamespace(NAMESPACE, iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(BASE_PATH + path));
  }
}
