import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

import { User } from 'src/app/model/user.model';
import { Gadget } from 'src/app/model/gadget.model';
import { GadgetService } from 'src/app/services/gadget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any={
    name:"",
    email:"",
    _id:""
  }
  gadgets:Gadget[]=[];
  constructor(private registerService:RegisterService ,private gadgetService:GadgetService) { }

  ngOnInit() {
    let id=localStorage.getItem('_id')
   
    this.registerService.getUserById(id).subscribe((response)=>{
      console.log(response);
      this.users=response;
    })
this.getGadgetsFromService()
  }
  getGadgetsFromService(){
    this.gadgetService.getGadgets().subscribe((response)=>{
      this.gadgets=response;
      console.log(this.gadgets)
    })
  }
  
  //username = this.registerService.getUsername();
}
