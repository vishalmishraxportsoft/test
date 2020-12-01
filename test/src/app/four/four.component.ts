import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  @Input() item: string;
  constructor() { }

  ngOnInit(): void {
  }

}
