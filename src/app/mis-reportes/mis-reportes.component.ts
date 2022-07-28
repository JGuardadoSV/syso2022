import { Component, OnInit } from '@angular/core';
import { Suceso , SucesoRead} from '../crear-reporte/suceso';
import { getStorage, ref, uploadBytes } from "firebase/storage"; 
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';
import { VerImagenService } from '../ver-imagen.service';
import { HttpClient } from '@angular/common/http';
import { collection, query, where, getDocs } from "firebase/firestore";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.component.html',
  styleUrls: ['./mis-reportes.component.css']
})
export class MisReportesComponent implements OnInit {

  storage = getStorage();
   storageRef = ref(this.storage).bucket;

   ruta = getStorage(initializeApp(firebaseConfig), "gs://syso-2022.appspot.com").app.options.storageBucket;
  constructor(private http:HttpClient,private verImagen:VerImagenService, private authServicio:AuthService) { }
  sucesos:SucesoRead[]=[];

  micorreo:string | null=''


  ngOnInit(): void {
    
    this.micorreo=this.authServicio.emailusuario;

    this.http.get<SucesoRead[]>('https://syso-2022-default-rtdb.firebaseio.com/sucesos.json').subscribe(
      response=>this.sucesos=Object.values(response).filter((obj)=>{
        return obj.usuario===this.micorreo
      }),
      error=>console.log(error)
    )

   

  }

  

}





