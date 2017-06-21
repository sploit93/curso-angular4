import {Component} from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
    public titulo;
    public administrador;
    
    
    
    constructor(){
        this.titulo = "Plantillas ngTemplate en angular4";
        this.administrador = true;
    }
    cambiar(value){
        this.administrador = value; 
    }
}