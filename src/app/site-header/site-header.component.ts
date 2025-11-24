import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: Boolean = false;

  constructor(private userSrv: UserService) {}

  ngOnInit() {
    this.userSrv.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userSrv.signOut();
    this.showSignOutMenu = false;
  }
}
