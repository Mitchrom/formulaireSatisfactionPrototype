import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lastName
  name
  userName
  email
  mdp
  token
  service
  ambianceTravail
  commentaire
  form
  uId
  uIdNumber

  constructor(
    private router : Router,
    private storage: Storage
    ) {}

  ngOnInit() {}

  submitForm() { 
    /*----------Inscription----------*/
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "username": this.userName,
      "name": this.name,
      "lastName":this.lastName,
      "email": this.email,
      "password": this.mdp
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    fetch("http://localhost:1337/api/auth/local/register", requestOptions)
      .then(response => response.json())
      .then((result) => {
        this.token = result       
        this.uIdNumber = this.token.user.id
        this.uId = this.uIdNumber.toString()
        console.log(typeof this.uId);
        
            
        
        //-----Stocker données utlisateur-----//
        this.storage.set('users', this.token.user);

        //j'teste des trucs jugez pas
        //partie formulaire
        if (this.token) {
          //si ça se log j'me fous à poil => j'me suis foutu à poil
              /*----------formulaire----------*/
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");                  
              var raw = JSON.stringify({
                "data": {
                  "service": this.service,
                  "ambianceTravail": this.ambianceTravail,
                  "commentaire": this.commentaire,
                  "userId": this.uId
                }
              });                  
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
              };                 
              fetch("http://localhost:1337/api/formulaires", requestOptions)
                .then(response => response.json())
                .then((result) => {
                  this.form = result.data;                                                 

                  //-----Stockage des éléments du formulaire-----//
                  this.storage.set('formulaires', this.form.attributes);
                })
                .catch(error => console.log('error', error));
        }
          this.navigate()
      })
      .catch(error => console.log('error', error));                   
  }


  navigate() {
    this.router.navigate(['/confirmation'])
  }

}



