import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UdemyAsp';
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    axios
      .get('https://localhost:7026/users')
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
