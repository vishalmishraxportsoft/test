import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';



import { TwoComponent } from './two.component';

@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    TwoComponent
  ]
})
export class TwoModule { }
