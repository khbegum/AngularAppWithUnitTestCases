import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Gadget} from '../model/gadget.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GadgetService {
  gadgets:Gadget[]=[];
serviceUrl:string="http://localhost:3004/api/gadgets/"
  constructor(private http:HttpClient) { }
  getGadgets():Observable<Gadget[]>{
    return this.http.get<Gadget[]>(this.serviceUrl);
  }
  getGadgetById(_id):Observable<Gadget[]>{
    return this.http.get<Gadget[]>(this.serviceUrl+_id);
  }
  updateGadgetById(_id,newGadget):Observable<Gadget[]>{
    return this.http.put<Gadget[]>(this.serviceUrl+_id,newGadget);

  }
  addGadget(name,type,colour,cost,poster,description):Observable<Gadget[]>{
    alert(name);
let newGadget={name:name,type:type,colour:colour,cost:cost,poster:poster,description:description}
return this.http.post<Gadget[]>(this.serviceUrl,newGadget);
  }
  deleteGadget(gadget):Observable<Gadget[]>{
alert(gadget._id);
return this.http.delete<Gadget[]>(this.serviceUrl+gadget._id);
  }
}
