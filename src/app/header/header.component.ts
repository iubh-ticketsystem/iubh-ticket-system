import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { AuthService } from '../auth/auth.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>;

  user: User;

  constructor(private store: Store<fromRoot.State>, public auth: AuthService) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.auth.user.subscribe((user) => {
      this.user = user;
    })
  }

  onLogout() {
    this.auth.logout();
  }

}
