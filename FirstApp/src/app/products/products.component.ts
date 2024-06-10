import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products:any;
  public keyword:string="";
  constructor() {
  }
  ngOnInit() {
    this.products=[
      {"id":1,"name":"computer","price":4500},
      {"id":2,"name":"earbuds","price":450},
      {"id":3,"name":"Mouse","price":300},
      {"id":4,"name":"TV","price":7500},
      {"id":5,"name":"Fridge","price":4500},
      {"id":6,"name":"Alexa","price":2000},
      {"id":7,"name":"Keyboard","price":300},
      {"id":8,"name":"Dishwasher","price":7500}
    ]

  }

  deleteProduct(p: any) {
    let index =this.products.indexOf(p);
    this.products.splice(index,1);
  }

/*
  search() {
    console.log(this.keyword);
    let result =[];
    for(let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products=result;
  }*/
  search(){
    this.products=this.products.filter((p:any)=>p.name.includes(this.keyword));
  }
}
