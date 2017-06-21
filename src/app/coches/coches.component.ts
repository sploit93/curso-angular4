import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesService} from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;
    
    constructor(
        private _peticionesService : PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche ("Seat Panda", "120", "Blanco"),
            new Coche ("Renault Clío", "85", "Rojo")
        ];
        
    }
    
    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result =>{
                this.articulos = result;
                if(!this.articulos){
                    console.log("Error al capturar.");
                }
                
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
        
    }
    
    onSubmit(){
        this.coches.push(this.coche);
    }
}