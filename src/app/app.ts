import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginTemplate } from './pages/auth/login-template/login-template';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginTemplate],
  template: `<app-login-template></app-login-template>`,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('system-bank');
}
