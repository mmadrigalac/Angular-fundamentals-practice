import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent implements OnInit {
  user$: Observable<IUser | null>;
  showSignOutMenu: Boolean = false;

  constructor(private userSrv: UserService) {
    this.user$ = this.userSrv.getUser(); // using async pipes to update the UI
  }

  ngOnInit() {
    // this.userSrv.getUser().subscribe((user) => {
    //   this.user = user;
    // });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userSrv.signOut();
    this.showSignOutMenu = false;
  }
}
