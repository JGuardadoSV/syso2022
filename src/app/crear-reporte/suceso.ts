export interface Suceso{

       
        usuario:string|null|undefined,
        descripcion:string,
        fecha:string,
        foto:string,
        categorias:String[]
      


}

export interface SucesoRead{

    id:number,
    usuario:string,
    descripcion:string,
    fecha:string,
    foto:string,
    categorias:String[]
  


}