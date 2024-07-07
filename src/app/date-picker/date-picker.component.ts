import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KeyDate, KeyDateOutput } from './key-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input('date')
  public userDate: Date = new Date();
  @Input('iso')
  public isoOutput: boolean = false;

  public dateModel: string = KeyDate.toString(this.userDate);

  @Output('dateSelected')
  private dateSelected: EventEmitter<string> = new EventEmitter<string>();

  public keyDate: KeyDate;

  constructor(
  ) {
    this.keyDate = new KeyDate(this.userDate);
  }

  public onDateSelected(date: number): void {
    this.dateModel = KeyDate.toString({ jYear: this.keyDate.year, jMonth: this.keyDate.month, jDate: date });

    if (!this.isoOutput) {
      this.dateSelected.emit(this.dateModel);
    }
    else {
      this.dateSelected.emit(KeyDate.toISODate({ jYear: this.keyDate.year, jMonth: this.keyDate.month, jDate: date }));
    }
  }

  public isToday(date: number): boolean {
    return KeyDate.isToday({ jYear: this.keyDate.year, jMonth: this.keyDate.month, jDate: date });
  }
}
