import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  @Output('notify') usernameEmit: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Initialized');
    this.user = new User();
  }

  onSubmit() {
    this.usernameEmit.emit(this.user);
  }

}
