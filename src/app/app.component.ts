import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { initializeApp } from "firebase/app";
import { AuthService } from './auth.service';
import { firebaseConfig } from './firebase.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  estalogeado: boolean = false;
  
  constructor(private route: Router,private authServicio:AuthService){
    //console.log("Esta es la ruta "+ this.route.isActive.name)
  }
  ngOnInit(): void {
    this.estalogeado=this.authServicio.estaAutenticado;
    initializeApp(firebaseConfig)
    
  }


  title = 'syso-app';
}
