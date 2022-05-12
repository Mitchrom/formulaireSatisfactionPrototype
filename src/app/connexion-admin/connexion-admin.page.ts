import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-connexion-admin',
  templateUrl: './connexion-admin.page.html',
  styleUrls: ['./connexion-admin.page.scss'],
})
export class ConnexionAdminPage implements OnInit {
  usernameAdmin
  emailAdmin
  mdpAdmin
  tokenAdmin
  userRole

  constructor(
    private storage: Storage,
    private router: Router
    ) { }

  ngOnInit() {
  }

  goStats() {
    console.log('okk');
    //-----connexion-----//
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "identifier": this.usernameAdmin,
      "email": this.emailAdmin,
      "password": this.mdpAdmin
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    fetch("http://localhost:1337/api/auth/local", requestOptions)
      .then(response => response.json())
      .then((result) => {
        this.tokenAdmin = result
        console.log(this.tokenAdmin)

        if (this.tokenAdmin.jwt) {
          this.navigate()
        }
      })
      .catch(error => console.log('error', error));
  }

  navigate() {
    this.router.navigate(['/acces-admin'])
  }

}
 