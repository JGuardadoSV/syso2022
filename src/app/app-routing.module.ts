import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { UltimosReportesComponent } from './ultimos-reportes/ultimos-reportes.component';

const routes: Routes = [
  { path: 'inicio', component: MenuComponent },
  { path: 'misReportes', component: MisReportesComponent },
  { path: 'ultimosReportes', component: UltimosReportesComponent },
  { path: 'crearReporte', component: CrearReporteComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
