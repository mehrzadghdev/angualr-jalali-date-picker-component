import { Component, OnInit } from '@angular/core';
import { KeyDate } from './date-picker/key-date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedDate: string = KeyDate.toString(new Date());

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
