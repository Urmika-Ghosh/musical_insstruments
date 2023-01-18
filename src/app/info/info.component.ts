import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../ser/service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  prodId: any |undefined;
  subId:any| undefined;
  prodDetails!:any;
  subDetails!:any;
  constructor(
    private actiRoute: ActivatedRoute,
    private serve: ServiceService
  ) { }

  ngOnInit(): void {
    this.actiRoute.paramMap.subscribe((params)=>{
      this.prodId=params.get('prod_Id');
      this.subId=params.get('sub_id');
      // console.log(this.prodId,this.subId);
      
     this.prodDetails = this.serve.Instruments.find(
      (a:any)=>a.prod_Id == this.prodId      
     );
    //  console.log(this.prodDetails);
      this.subDetails = this.prodDetails.sub.find(
        (b:any)=>b.sub_id == this.subId
      );
      console.log(this.subDetails);
      
    })

  }

}
