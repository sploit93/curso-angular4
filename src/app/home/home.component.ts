import { Component } from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

 export class HomeComponent{
     public titulo ="Página principal";
     public listado_ropa:Array<string>;
     public prenda_add:string;

     public fecha;
     public nombre = "JUAN lopez MarTinez";
     
    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2017,4,15);
    }


    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardar_prenda(){
        this._ropaService.addRopa(this.prenda_add);
        this.prenda_add = '';
    }
    eliminar_prenda(index:number){
        this._ropaService.deleteRopa(index);
    }
 }