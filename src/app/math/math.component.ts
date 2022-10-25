import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
a:number=0;
b:number=0;
result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
  this.result=this.a+this.b;
  }
  sub(){
    this.result=this.a-this.b;
  }
  mul(){
    this.result=this.a*this.b;
  }
  div(){
    this.result=this.a/this.b;
  }
}
