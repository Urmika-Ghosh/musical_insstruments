import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../ser/service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  collect_Id:any|undefined;
  productdetails:any|undefined;
  // searched:any|undefined;
  search:string='';
  constructor(
    private activeRoute:ActivatedRoute,
    private ser:ServiceService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params)=>{
      this.collect_Id = params.get('prod_Id');
      // console.log(this.collect_Id);
      this.productdetails = this.ser.Instruments.filter(
        (d:any)=>d.prod_Id== this.collect_Id
        );
        console.log("productdetails...",this.productdetails);
    })
  }

  findd(){
    // this.searched = this.search;
    // console.log(this.searched,"...searched");
    console.log(this.search);
    
    
  }

}
