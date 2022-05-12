import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-acces-admin-users-stats',
  templateUrl: './acces-admin-users-stats.page.html',
  styleUrls: ['./acces-admin-users-stats.page.scss'],
})
export class AccesAdminUsersStatsPage implements OnInit {
  users

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    var requestOptions = {
      method: 'GET',
    };
    fetch("http://localhost:1337/api/users", requestOptions)
      .then(response => response.json())
      .then((result) => {
        this.users = result
        console.log(this.users)
      })
      .catch(error => console.log('error', error));
  }

}
