import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  instructionsOpen: boolean = false;
  result: boolean | undefined = undefined;
  firstInputType: string = 'text';
  secondInputType: string = 'text';


  compare(first: any, second: any, operator: string) {
    let response: boolean | undefined;

    let a: any;
    let b: any;

    if(this.firstInputType === 'number'){
      a = Number(first)
    }else{
      a = first.toString()
    }

    if(this.secondInputType === 'number'){
      b = Number(first)
    }else{
      b = second.toString()
    }

    switch (operator) {
      case '==': response = a == b;
        break;
      case '===': response = a === b;
        break;
      case '!=': response = a != b;
        break;
      case '!==': response = a !== b;
        break;
      case '>': response = a > b;
        break;
      case '>=': response = a >= b;
        break;
      case '<': response = a < b;
        break;
      case '<=': response = a <= b;
        break;
    }

    this.result = response;

    if (a === '' || b === '') {
      this.result = undefined;
    }
  }

  changeFirstType() {
    if(this.firstInputType === 'text'){
      this.firstInputType = 'number'
    }else{
     this.firstInputType = 'text'
    }
  }

  changeSecondType() {
    if(this.secondInputType === 'text'){
      this.secondInputType = 'number'
    }else{
     this.secondInputType = 'text'
    }
  }

  changeIcon(icon: HTMLElement){
    if(icon.classList.contains('fa-s')){
      icon.classList.remove('fa-s');
      icon.classList.add('fa-n');
    }else{
      icon.classList.remove('fa-n');
      icon.classList.add('fa-s');
    }
  }
}

