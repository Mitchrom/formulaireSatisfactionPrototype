import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  user
  users
  name
  lastName
  form
  forms

  value
  key
  iterationNumber

  constructor(
    private storage: Storage,
    private router: Router
    ) {}

  ngOnInit() {

    this.storage.get('user').then((val) => {
      this.user = val
    });
    this.storage.get('formulaire').then((val) => {
      this.form = val
    });

    // this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
    //   console.log('Début itération: ordre key value iterationNumber');
    //   console.log(key);
    //   console.log(value);
    //   console.log(iterationNumber);
    //   console.log('Fin itération');
    // });

      // Traverse key/value pairs
    this.storage.keys().then((k) => {
      console.table(k)
  });

  }


  navigate() {
    this.router.navigate(['/formulaire'])
  }

}
