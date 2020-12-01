import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NestedComponent } from './nested/nested.component';
import { NumbersComponent } from './numbers/numbers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { DynamicComponent } from './dynamic/dynamic.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    NestedComponent,
    NumbersComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    DynamicComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
