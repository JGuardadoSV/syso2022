import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { getAuth, signOut } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   auth = getAuth(); 
  visibleSidebar1: boolean = false;
  constructor(private primengConfig: PrimeNGConfig,private router: Router,private authServicio:AuthService){

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  display=true;
  title = 'syso-app';

  ultimosReportes(){
    this.router.navigate(['/ultimosReportes/'])
    this.visibleSidebar1 = false;
  }
  misReportes(){
    this.router.navigate(['/misReportes/'])
    this.visibleSidebar1 = false;
  }

  crearReporte(){
    this.router.navigate(['/crearReporte/'])
    this.visibleSidebar1 = false;
  }

  salir(){
    signOut(this.auth).then(() => {
      this.authServicio.estaAutenticado=false;
    }).catch((error) => {
      // An error happened.
    });
    this.router.navigate([''])
    this.visibleSidebar1 = false;
  }

}
