import { HolidayServiceService } from './../holiday-service.service';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  constructor(private holiday: HolidayServiceService) { }

  ngOnInit() {
  }

  week: Array<moment.Moment> = [];

  @Input()
  set dates(value: Array<moment.Moment>) {
    const weekdays = new Array<moment.Moment>(7);
    if (!value) {
      this.week = weekdays;
      return;
    }
    if (value.length === 7) {
      this.week = value;
    }
    else {
      for (let d of value) {
        weekdays[d.day()] = d;
      }
      this.week = weekdays;
    }

  }


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
  isHoliday(index: number): boolean {
    if (this.week[index]) {
      return this.holiday.isHolidayDate(this.week[index]);
    }
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
    return !this.week[index];
  }

  getDayNumber(moment: moment.Moment) {
    console.log(moment);
    console.log(this.week);
    if (moment) {
      return moment.date();
    }
    return '';
  }

}
