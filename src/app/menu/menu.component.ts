import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  visibleSidebar1: boolean = false;
  constructor(private primengConfig: PrimeNGConfig,private router: Router){

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
    this.router.navigate([''])
    this.visibleSidebar1 = false;
  }

}
