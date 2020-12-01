import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  ids: Array<number> = [2, 3, 10, 15, 26, 35, 50, 63, 82]
  ArryVal: any;
  enterIndex: any;
 
  constructor() { }

  ngOnInit(): void {
  }
  Index(val) {
    console.log(this.ids[parseInt(val)], val);
  
    
        this.ArryVal = this.ids[parseInt(val)]
  

  }

}
