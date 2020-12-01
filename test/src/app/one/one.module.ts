import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';



import { OneComponent } from './one.component';

@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    OneComponent
  ]
})
export class OneModule { }
