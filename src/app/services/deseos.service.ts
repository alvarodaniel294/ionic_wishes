import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[]=[];
  constructor( ) {
    this.cargarStorage();
    
   }
   crearLista(titulo:string){
    const nuevaLista=new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
   }
   borrarLista(lista:Lista){
     this.listas=this.listas.filter(listaData=>listaData.id !== lista.id);
     this.guardarStorage();
   }
   obtenerLista(id:string|number){
    id=Number(id);
    return this.listas.find(listadata=> listadata.id=== id );

   }
   editarNombreLista(lista:Lista,nuevoNombre:string){
     console.log(nuevoNombre);
     
     this.listas.filter(listaAeditar=>{
       if(listaAeditar.id===lista.id){
         listaAeditar.titulo=nuevoNombre;
         this.guardarStorage();
       }
     })
   }
   guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas) );
   }
   cargarStorage(){
     if( localStorage.getItem('data') ){
        this.listas= JSON.parse( localStorage.getItem('data') )
       
     }else{
       this.listas=[];
     }

   }
}
