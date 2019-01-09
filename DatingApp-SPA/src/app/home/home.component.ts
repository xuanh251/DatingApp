import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url = 'http://localhost:5000/api/';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // getValues() {
  //   this.http.get(url + 'values').subscribe(
  //     res => {
  //       this.values = res;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
