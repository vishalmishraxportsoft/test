import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentItem: any;
  constructor() { }

  ngOnInit(): void {
  }

  somethingChanged(val) {
    console.log(val);

  }
  



}
