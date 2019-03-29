import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelToCel',
})
export class KelToCelPipe implements PipeTransform {
  transform(kel: number): number {
    return kel ? +(kel - 273.15).toFixed(1) : 0;
  }
}
