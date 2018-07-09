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

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  messageSent(event: User) {
    console.log("event", event);
    this.gotMessage = true;
    this.user = event;
    console.log(this.user.name);
  }
}
