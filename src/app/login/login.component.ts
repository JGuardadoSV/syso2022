import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario = {
    correo: '',
    clave: '',
  };
  constructor(private router:Router, private authServicio:AuthService) { }

  ngOnInit(): void {
   
  }
  login() {
    this.authServicio.login(this.usuario);
  }


}
