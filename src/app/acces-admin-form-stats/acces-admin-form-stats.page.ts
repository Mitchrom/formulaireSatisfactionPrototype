import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-acces-admin-form-stats',
  templateUrl: './acces-admin-form-stats.page.html',
  styleUrls: ['./acces-admin-form-stats.page.scss'],
})
export class AccesAdminFormStatsPage implements OnInit {
  user
  users
  name
  lastName
  form
  forms

  value
  key
  iterationNumber

  formulaires
  userId

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {

    var requestOptions = {
      method: 'GET',
    };
    fetch("http://localhost:1337/api/formulaires?populate=*", requestOptions)
      .then(response => response.json())
      .then((result) => {
        // console.log(result);
        this.formulaires = result.data
        console.log(this.formulaires);
      })
      .catch(error => console.log('error', error));

  }

}
