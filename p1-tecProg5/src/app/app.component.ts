import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { entrada } from './entrada';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p1-tecProg5';


  newEntrada = {} as entrada
  tabelaTimes : entrada[] = []


  SaveData(form: NgForm){
    this.newEntrada.nomeTime = form.value.nome
    this.newEntrada.pontTime = form.value.pont
    this.tabelaTimes.push(this.newEntrada)
    this.newEntrada = {} as entrada
    form.resetForm()
    
  }


 compare(timeA: entrada,timeB: entrada) {
  if (timeA.pontTime < timeB.pontTime)
     return -1;
  if (timeA.pontTime > timeB.pontTime)
    return 1;
  return 0;
}

orderList(){
  this.tabelaTimes.sort(this.compare)
}    
  

  

}
