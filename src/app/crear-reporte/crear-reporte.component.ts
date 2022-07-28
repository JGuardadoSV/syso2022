import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Suceso } from './suceso';
import { getStorage, ref, uploadBytes } from "firebase/storage"; 
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { VerImagenService } from '../ver-imagen.service';
@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent implements OnInit {

  incidente: boolean = false;
  accidente: boolean = false;
  accion: boolean = false;
  condicion: boolean = false;
  fotoo!: string;
  descripcion:string='';
  url:string | ArrayBuffer | null | undefined='';



    constructor(private router:Router,private http:HttpClient, private verImagen:VerImagenService) { }

  suceso:Suceso={
    
    usuario:getAuth().currentUser?.email,
    descripcion:'',
    fecha:new Date().toLocaleString(),
    foto:'',
    categorias:[]
  };

  ngOnInit(): void {
  }
  fileName = '';
  file!:File
  registrar(){
    //this.suceso.usuario='Josue Guardado';
    this.suceso.descripcion=this.descripcion;
    if(this.accidente===true){
      this.suceso.categorias.push("Accidente")
    }
    if(this.accion===true){
      this.suceso.categorias.push("Acción insegura")
    }
    if(this.condicion===true){
      this.suceso.categorias.push("Condición insegura")
    }
    if(this.incidente===true){
      this.suceso.categorias.push("Incidente")
    }
    //this.suceso.foto=this.foto.name
    this.fileName = this.file.name;

    const formData = new FormData();
//console.log("basura "+this.fotoo)
this.suceso.foto=this.verImagen.direccion
    

    this.http.post('https://syso-2022-default-rtdb.firebaseio.com/sucesos.json',this.suceso).subscribe(
      response=> this.router.navigate(['misReportes']),
      error=>console.log(error)
    )
  }
  
  onFileSelected(event: { target: { files: File[]; }; }) {

     this.file = event.target.files[0];

     var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
     

     const storage = getStorage();
     const storageRef = ref(storage, 'fotos/imagen'+Number(new Date())+'.jpg');
     
     // 'file' comes from the Blob or File API
     uploadBytes(storageRef, this.file).then((snapshot) => {
       console.log("este nombre se pasa "+storageRef.name)
       this.verImagen.obtenerUrl(storageRef.name)
       this.suceso.foto=this.verImagen.direccion
       this.fotoo=this.suceso.foto
       this.suceso.foto=this.fotoo

       console.log("ESTA ES LA RUTA XXXX" + this.suceso.foto)
       this.suceso.foto=this.verImagen.direccion
       console.log("ESTA ES LA RUTA XXXX" + this.suceso.foto)
     });
     
 
}

  

}
