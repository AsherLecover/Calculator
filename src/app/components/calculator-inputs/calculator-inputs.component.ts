import { Component, OnInit, Query } from '@angular/core';
import { log } from 'util';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-calculator-inputs',
  templateUrl: './calculator-inputs.component.html',
  styleUrls: ['./calculator-inputs.component.css']
})
export class CalculatorInputsComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private serv: ServiceService) { }

  myThing: string = '';
  num: string = '';
  result: string = '';
  resultToBePush = '';
  temp: string = '';
  resultP: string =''

  onClickMe(value:string){
    if(value == 'AC'){
      this.num = '';
      return;
    }
      if(value == '='){
        this.result = eval(this.num);
        this.resultToBePush = this.num;
        this.num = this.result;
        this.resultP = this.resultToBePush + ' = ' + this.result;
        console.log(this.resultP);
        
        this.serv.arrOfHistory.push(this.resultToBePush + ' = ' + this.result);
        return
      }
      this.num +=value
  }
  myHistoryFun():void{
    for (let i of this.serv.arrOfHistory) {
      this.serv.arr.push(i)
    }
     this.serv.arrOfHistory = []
  }

  
  

}
