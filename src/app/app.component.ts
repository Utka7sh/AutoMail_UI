import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutomailHomeComponent } from './automail-home/automail-home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AutomailHomeComponent],
  styleUrl: './app.component.scss',
  standalone: true,
  template: '<app-automail-home />, <router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'AutoMail';
}
