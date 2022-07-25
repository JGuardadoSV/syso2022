import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UltimosReportesComponent } from './ultimos-reportes/ultimos-reportes.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';
import { MenuComponent } from './menu/menu.component';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DividerModule} from 'primeng/divider';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UltimosReportesComponent,
    MisReportesComponent,
    CrearReporteComponent,
    MenuComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
