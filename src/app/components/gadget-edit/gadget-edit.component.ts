import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { GadgetService } from 'src/app/services/gadget.service';
import {Gadget} from 'src/app/model/gadget.model'

@Component({
  selector: 'app-gadget-edit',
  templateUrl: './gadget-edit.component.html',
  styleUrls: ['./gadget-edit.component.css']
})
export class GadgetEditComponent implements OnInit {
gadgets:any={
  
  name:"",
  type:"",
  colour:"",
  cost:"",
  poster:"",
  description:"",
  _id:"",
}
// gadgets:Gadget[]=[];
  constructor( private router:Router,private activatedRoute:ActivatedRoute,private gadgetService:GadgetService) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get('_id');
  
    this.gadgetService.getGadgetById(id).subscribe((response)=>{
     
      console.log(response);
      this.gadgets=response;
    })
  }
  save(){
    this.gadgetService.updateGadgetById(this.gadgets._id,this.gadgets).subscribe((response)=>{
      this.router.navigate(['/gadgets']);
    })
  }
  cancel(){
    this.router.navigate(['/gadgets']);
  }

}
