import { Component } from '@angular/core';
import { LoginForm } from '../login-form/login-form';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [LoginForm],
  templateUrl: './login-template.html',
  styleUrls: ['./login-template.scss']
})
export class LoginTemplate {

}
