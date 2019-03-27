import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController,IonItemSliding } from "@ionic/angular";


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  
  constructor(private router:Router,
              public deseosService:DeseosService,
              public alertController: AlertController) {
  
              
  }

  ngOnInit() {}

  listaSeleccionada( lista:Lista ){
    if(this.terminada){
      this.router.navigate([`/tabs/tab2/agregar/${lista.id}`]);
    }else{
      this.router.navigate([`/tabs/tab1/agregar/${lista.id}`]);
    }
    
  }
  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
    console.log('why');
    
  }
  async editarLista(lista:Lista,slidingItem:IonItemSliding){
    console.log('editar');
    
    const alert= await this.alertController.create({
      header:'Editar Lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          value:lista.titulo,
          placeholder:'Nombre de la Lista'
        }
      ],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            slidingItem.close();
          }
        },
        {
          text:'Editar',
          handler:(data)=>{
            if(data.titulo.length===0){
              return;
            }else{
              this.deseosService.editarNombreLista(lista,data.titulo);
              slidingItem.close();
            }
          }
        }
      ]
    });
    alert.present();
    
  }
  
 

}
