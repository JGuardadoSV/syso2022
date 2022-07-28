import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// Create a reference with an initial file path and name

@Injectable({
  providedIn: 'root'
})
export class VerImagenService {

  direccion:string='';
  constructor() { }

  storage = getStorage();

obtenerUrl(nombre:string){
  getDownloadURL(ref(this.storage, 'fotos/'+nombre))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    console.log("Se va a guardar esta ruta " + url)
    this.direccion= url
  })
  .catch((error) => {
    // Handle any errors
  });

  
  /*
  //https://firebasestorage.googleapis.com/v0/b/syso-2022.appspot.com/o/1.png?alt=media&token=3ef3a963-24fb-4eee-89c0-17b0ca953ebf
  const httpsReference = ref(this.storage, 'https://firebasestorage.googleapis.com/v0/b/syso-2022.appspot.com/o/fotos/imagen1658958886461.jpg');  

 //const pathReference = ref(this.storage, 'fotos/imagen1658958886461.jpg');
  console.log(httpsReference.bucket)

  */
}
}
