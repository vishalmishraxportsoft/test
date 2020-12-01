import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';



import { FourComponent } from './four.component';

@NgModule({
  declarations: [
    FourComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    FourComponent
  ]
})
export class FourModule { }
