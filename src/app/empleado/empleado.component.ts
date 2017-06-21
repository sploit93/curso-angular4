import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component ({
    selector : 'empleado',
    templateUrl: './empleado.component.html'
    
})
 export class EmpleadoComponent{
    public nombre_componente = 'Nombre empleado';
    public listado_empleado = '1,2,3,4 y 5';
    public empleado:Empleado;

    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;


    constructor(){
        this.empleado = new Empleado('Ale Lázaro', 22, 'Informático', false);
        this.trabajadores = [
            new Empleado('Ale Lázaro', 22, 'Informático', true),
            new Empleado('Manolo Martínez', 35, 'Administrativo', true),
            new Empleado('Ana Torroja', 40, 'Cocinera', false)
        ];
        this.trabajador_externo = true;
        this.color = 'red';
        this.color_seleccionado = '#ccc';
    }
    
    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
 }