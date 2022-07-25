import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  formulario!: FormGroup;
  usuario = {
    correo: '',
    clave: '',
  };
  constructor(private router:Router) {}

  ngOnInit(): void {}

  registrar() {
    if (this.usuario.clave.length < 6) {
      alert('La clave debe de ser al menos de 6 caracteres');
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.usuario.correo + '@itcha.edu.sv',
        this.usuario.clave
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert('Usuario creado exitosamente, puede iniciar sesión');
          this.router.navigate([''])
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if(errorCode=='auth/email-already-in-use'){
            alert('El usuario ya está registrado, será redirigido a la pantalla de inicio')
            this.router.navigate([''])
          }else{
            alert('Ocurrió un error en la petición, vuelva a intentarlo por favor')
          }
          console.log(errorCode)
          // ..
        });

      console.log(this.usuario);
    }
  }
}
