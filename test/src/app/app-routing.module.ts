import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NestedComponent } from './nested/nested.component';
import { FormComponent } from './form/form.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'nested', component: NestedComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'form', component: FormComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
