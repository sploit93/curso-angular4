import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
 export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandía.';
    
    public nombre:string;
    public edad:number;
    public mayorQue:boolean;
    public trabajos:Array<any> = ['Alejandro', 25, 'Sánchez', 'Martínez'];
    public comodin:any;

    constructor(){
        this.nombre = 'Alejandro Lázaro';
        this.edad = 77;
        this.mayorQue = true;
        this.comodin = 'SI';
        
    }

    ngOnInit(){
        
        //this.cambiarNombre(); 
        //this.cambiarEdad(45);
        
        //Variables y alcance VAR cambia de forma global el valor, LET cambia en el bloque sólamente...
        
        var uno = 8;
        var dos = 15;
        
        if(uno === 8){
            let uno = 3;
            var dos = 88;
            console.log ('Dentro IF -> ' + uno + ' ' + dos);  
        }
            console.log ('Fuera IF -> ' + uno + ' ' + dos);  

    }
    
    cambiarNombre(){
        this.nombre = 'Ale Lázaro';
    }
    cambiarEdad(edad){
       this.edad = edad;
    }


}