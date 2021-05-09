import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-info',
  templateUrl: './bottom-info.component.html',
  styleUrls: ['./bottom-info.component.scss']
})
export class BottomInfoComponent implements OnInit {
  @Input() score: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
