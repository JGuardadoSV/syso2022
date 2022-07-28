import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaAutenticado:boolean=false;
  emailusuario:string | null='';
  constructor(private router:Router) { }

  login(usuario:Usuario) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, usuario.correo.toLowerCase()+'@itcha.edu.sv', usuario.clave)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Bienvenido a SYSO - ITCHA")
        this.estaAutenticado=true;
        console.log(usuario)
        console.log(this.estaAutenticado)
        this.emailusuario=user.email;
        this.router.navigate(['misReportes'])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Ocurrió un error en la autenticación, intente nuevamente')
        console.log(usuario)
      });
  }


}
