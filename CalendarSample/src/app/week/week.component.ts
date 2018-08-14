import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  dates: any;

  /**
   * Returns a boolean value that indicates if the 
   * current value is a weekday
   * @param index The current day index
   */
  isWeekDay(index: number): boolean {
    return index > 0 && index < 6;
  }


  /**
   * Returns true if the day is a Holiday
   * @param index The current day index
   */
  isHoliday(index:number): boolean {
    return false;
  }

  /**
   * Returns true if the day is a weekend day
   * @param index the current day index
   */
  isWeekend(index: number): boolean {
    return index === 0 || index === 6;
  }

  /**
   * Returns true if the day is disabled
   * @param index the current day index
   */
  isDisabled(index: number): boolean {
    return !this.dates[index];
  }

}
