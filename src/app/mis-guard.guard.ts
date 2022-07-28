import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MisGuardGuard implements CanActivate {
  constructor(private authServicio:AuthService, private route:Router){}
  canActivate(){
    console.log(this.authServicio.estaAutenticado + "XXXXXXXXXXXXX")
    if  (!this.authServicio.estaAutenticado){
      this.route.navigateByUrl('');
      return false
    }else{
      return true
    }
   
  }
  
}
