import { Component, Input } from '@angular/core';
import { User } from './shared/classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Template-driven User Form';
  gotMessage: boolean = false;
  user: User;

  messageSent(event: User) {
    this.gotMessage = true;
    this.user = event;
  }
}
