import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  arr: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    })
  }

  createItem() {
    return this.fb.group({
      phonenumber: [''],
      deletebutton: [''],
      IsPhnDelButtonShow:['']
      //pay: ['']
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;    
    this.arr.push(this.createItem());
  }
  removeAddress(val) {
    this.arr = this.myForm.get('arr') as FormArray; 
    this.arr.removeAt(this.arr.value.findIndex(image => image.id === val))
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
