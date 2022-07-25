import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    correo: '',
    clave: '',
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.usuario.correo+'@itcha.edu.sv', this.usuario.clave)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Bienvenido a SYSO - ITCHA")
        console.log(this.usuario)
        this.router.navigate(['misReportes'])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Ocurrió un error en la autenticación, intente nuevamente')
        console.log(this.usuario)
      });
  }

}
