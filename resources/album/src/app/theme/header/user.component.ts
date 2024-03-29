import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService, TokenService, MenuService } from '@core';

@Component({
  selector: 'app-user',
  template: `
    <button
      mat-button
      class="matero-toolbar-button matero-avatar-button"
      href="javascript:void(0)"
      [matMenuTriggerFor]="menu"
    >
      <img class="matero-avatar" src="assets/assets/images/avatar.jpg" width="32" alt="avatar" />
      <span class="matero-username" fxHide.lt-sm>Zongbin</span>
    </button>

    <mat-menu #menu="matMenu">
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>{{ 'user.profile' | translate }}</span>
      </button>
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>{{ 'user.settings' | translate }}</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'user.logout' | translate }}</span>
      </button>
    </mat-menu>
  `,
})
export class UserComponent {
  constructor(
    private _router: Router,
    private _settings: SettingsService,
    private _token: TokenService,
    private _menu: MenuService
  ) {}

  logout() {
    this._token.clear();
    this._settings.removeUser();
    this._menu.reset();
    this._router.navigateByUrl('/auth/login');
  }
}
