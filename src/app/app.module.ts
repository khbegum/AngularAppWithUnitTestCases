import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes,ActivatedRoute} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicGadgetsComponent } from './components/music-gadgets/music-gadgets.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http'
import {AuthService} from '../app/services/auth.service';
import {RegisterService} from '../app/services/register.service'
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { GadgetService } from './services/gadget.service';
import { GadgetEditComponent } from './components/gadget-edit/gadget-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'gadgets',component:MusicGadgetsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'edit/:_id',component:GadgetEditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicGadgetsComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    GadgetEditComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatSliderModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [RegisterService,AuthService,GadgetService,{
    provide: ActivatedRoute,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
