import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Suceso , SucesoRead} from '../crear-reporte/suceso';
import { getStorage, ref, uploadBytes } from "firebase/storage"; 
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';
import { VerImagenService } from '../ver-imagen.service';
@Component({
  selector: 'app-ultimos-reportes',
  templateUrl: './ultimos-reportes.component.html',
  styleUrls: ['./ultimos-reportes.component.css']
})
export class UltimosReportesComponent implements OnInit {
   storage = getStorage();
   storageRef = ref(this.storage).bucket;

   ruta = getStorage(initializeApp(firebaseConfig), "gs://syso-2022.appspot.com").app.options.storageBucket;
  constructor(private http:HttpClient,private verImagen:VerImagenService) { }
  sucesos:SucesoRead[]=[];
  ngOnInit(): void {
    console.log("probando")
    this.http.get<SucesoRead[]>('https://syso-2022-default-rtdb.firebaseio.com/sucesos.json').subscribe(
      response=>this.sucesos=Object.values(response),
      error=>console.log(error)
    )

    this.verFoto('')

  }

  verFoto(foto:string){
    
    return this.verImagen.obtenerUrl(foto)
  }

}
