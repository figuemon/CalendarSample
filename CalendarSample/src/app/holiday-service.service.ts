import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HolidayServiceService {

  constructor() { }

  /**
   * This probably need to be performed by a backend service
   * @param year The year that you want to retrieve the holiday list
   */
  private getYearHolidays(year: number, country: string) {
    return [
      moment('2018-01-01'),
      moment('2018-03-29'),
      moment('2018-03-30'),
      moment('2018-04-11'),
      moment('2018-05-01'),
      moment('2018-07-25'),
      moment('2018-08-02'),
      moment('2018-08-15'),
      moment('2018-09-15'),
      moment('2018-10-12'),
      moment('2018-12-25'),
    ];
  }

  isHolidayDate(m1: moment.Moment, country: string): boolean {
    return this.getYearHolidays(m1.year(), country).filter((val) => this.isSameDayAndMonth(val, m1)).length > 0;
  }


  private isSameDayAndMonth(m1: moment.Moment, m2: moment.Moment) {
    return m1.date() === m2.date() && m1.month() === m2.month()
  }

}
