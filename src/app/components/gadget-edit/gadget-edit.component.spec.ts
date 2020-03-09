import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { GadgetEditComponent } from './gadget-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { GadgetService } from 'src/app/services/gadget.service';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Gadget } from 'src/app/model/gadget.model';



describe('GadgetEditComponent', () => {
  let component: GadgetEditComponent;
  let fixture: ComponentFixture<GadgetEditComponent>;
  let gadgetService:GadgetService
  let router:Router;
  let activatedRoute:ActivatedRoute;
   class  MckActivatedroute{
    snapShot:{
      paramMap:{
        get:(_id)=>{'1234'}
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetEditComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[GadgetService,{provide: ActivatedRoute, 
        useValue:{
          snapShot:of({
            paramMap:of({
              get:of((_id)=>'1234')
            })
          })
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(GadgetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    gadgetService=TestBed.get(GadgetService);
    router = TestBed.get(Router);
        
        router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

 
  it('cancel()',()=>{
    const navigateSpy = spyOn(router, 'navigate');
     component.cancel()  
     expect(navigateSpy).toHaveBeenCalledWith(['/gadgets']);
  })

 it("ngonit",()=>{
       let http:HttpClient;
    let service=new GadgetService(http);
   let active=new ActivatedRoute
    let comp=new GadgetEditComponent(router,active,service)



const response:Gadget[]=[{
  _id:'1234',
  name:"hjhj",
  type:"String",
    colour:"String",
    cost:224,
    poster:"String",
    description:"String"
  

}]
comp.ngOnInit();
fixture.detectChanges();
service.getGadgetById(active.snapshot.paramMap.get).subscribe((res)=>{
  expect(response).toEqual(res)
  console.log(res)
})




   
 })
})
