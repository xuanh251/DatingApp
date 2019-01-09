import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() { }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Đăng nhập thành công!');
    }, err => {
      this.alertify.error(err);
    });
  }
  // ham nay tra ve bool --> hai dau !! de xac dinh co gia tri hay ko
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Đã đăng xuất.');
  }
}
