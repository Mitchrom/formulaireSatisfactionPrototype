import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acces-admin',
  templateUrl: './acces-admin.page.html',
  styleUrls: ['./acces-admin.page.scss'],
})
export class AccesAdminPage implements OnInit {
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
        console.log(result);
        this.formulaires = result.data
        console.log(this.formulaires);
      })
      .catch(error => console.log('error', error));

  }

}
