import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';



import { ThreeComponent } from './three.component';

@NgModule({
  declarations: [
    ThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ThreeComponent
  ]
})
export class ThreeModule { }
