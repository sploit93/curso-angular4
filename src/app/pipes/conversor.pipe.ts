import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform {
    transform(value, por){
        let valor1 = parseInt(value);
        let valor2 = parseInt(por);
        let result = "La multiplicacion: "+valor1+" por "+valor2+" es = "+(valor1*valor2);
        
        return result;
    }
}