import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() { }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Dang nhap thanh cong');
    }, err => {
      console.log(err);
    });
  }
  // ham nay tra ve bool --> hai dau !! de xac dinh co gia tri hay ko
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
