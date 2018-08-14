import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as holiday from 'date-holidays';


@Injectable({
  providedIn: 'root'
})
export class HolidayServiceService {

  constructor() {
  }

  hd = new holiday();

  isHolidayDate(m1: moment.Moment, country: string): boolean {
    this.hd = new holiday(country);
    return this.hd.isHoliday(m1.toDate());
  }

  private isSameDayAndMonth(m1: moment.Moment, m2: moment.Moment) {
  return m1.date() === m2.date() && m1.month() === m2.month()
}

}
