import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../ser/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  store:any=[];
  constructor(private ins:ServiceService) { }

  ngOnInit(): void {
    this.store=this.ins.Instruments;
    console.log(this.store);
    
  }

}
