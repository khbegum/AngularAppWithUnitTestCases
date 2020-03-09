import { Component, OnInit } from '@angular/core';
import { GadgetService } from 'src/app/services/gadget.service';
import { Gadget } from 'src/app/model/gadget.model';
import {Router} from '@angular/router'
//import { FormBuilder } from '@angular/forms';
import {

  FormGroup,
  Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-music-gadgets',
  templateUrl: './music-gadgets.component.html',
  styleUrls: ['./music-gadgets.component.css']
})
export class MusicGadgetsComponent implements OnInit {
  myForm: FormGroup;
  gadgets: Gadget[] = [];
  constructor(private gadgetService: GadgetService, private formBuilder: FormBuilder,private router:Router) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      colour: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      poster: ['', [Validators.required]],
      description: ['', [Validators.required]],


      // mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    })
  }

  ngOnInit() {

    this.getGadgetsFromService();
  }
  getGadgetsFromService() {
    this.gadgetService.getGadgets().subscribe((response) => {
      this.gadgets = response;
      console.log(this.gadgets)
    })
  }
  addGadgetToServices(name, type, colour, cost, poster, description) {
    this.gadgetService.addGadget(name, type, colour, cost, poster, description).subscribe((response) => {
      alert('Gadget is added');
      this.getGadgetsFromService();
      this.router.navigate([''])

    })
  }
  deleteGadgetFromService(gadget){
alert(gadget._id);
this.gadgetService.deleteGadget(gadget).subscribe((response)=>{
  alert('Data Deleted');
  this.getGadgetsFromService();
})
  }
  goToEditComponent(id){
    this.router.navigate(['/edit/'+id])

  }

}
