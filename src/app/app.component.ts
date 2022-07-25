import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  eslogin=true;
  
  constructor(private route: Router){
    //console.log("Esta es la ruta "+ this.route.isActive.name)
  }
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }


  title = 'syso-app';
}
