import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {
  txt

  constructor(
    private router : Router,
    private storage: Storage,
    ) { }

  ngOnInit() {
  };
  

  // testStorage(){
  //   if (this.txt) {
  //     console.log(this.txt);
      
  //   }
  // }

}
