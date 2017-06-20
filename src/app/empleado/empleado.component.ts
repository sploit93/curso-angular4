import { Component } from '@angular/core';

@Component ({
    selector : 'empleado',
    templateUrl: './empleado.component.html'
    
})
 export class EmpleadoComponent{
    public nombre_componente = 'Que pasa cruck';
    public listado_empleado = '1,2,3,4 y 5';
 }