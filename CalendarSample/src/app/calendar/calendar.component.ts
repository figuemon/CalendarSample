import { Component, OnChanges, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MonthData } from './monthData';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnChanges, OnInit {

  constructor() { }

  @Input()
  startDate = new Date();

  @Input()
  numberOfDays = 60;

  @Input()
  countryCode = "";

  get monthsArray() {
    return Object.keys(this.months);
  }

  private startMoment: moment.Moment;

  private endMoment: moment.Moment;

  private weeks = 0;

  private months = {};

  ngOnInit(): void {
    this.loadCalendarData();
  }

  private loadCalendarData() {
    this.months = {};
    this.startMoment = moment(this.startDate);
    let currentDate = this.startMoment;
    let initialDay = this.startMoment.day();
    let currentMonth = currentDate.format('MMMM YYYY');
    this.months[currentMonth] = new MonthData(currentDate.format('MMMM YYYY'), []);
    const monthCounter = 1;
    let dayOfWeek = initialDay;
    let weekOfMonth = 0;
    // Complete the rest of the Days
    for (let i = 0; i < this.numberOfDays; i++) {
      //Initialize week array if is unefined
      if (!this.months[currentMonth].weeks[weekOfMonth]) {
        this.months[currentMonth].weeks[weekOfMonth] = [];
      }
      //Add current date to the week 
      this.months[currentMonth].weeks[weekOfMonth].push(currentDate.clone());
      currentDate.add(1, 'days');
      dayOfWeek++;
      // Move to next Week
      if (dayOfWeek > 6) {
        weekOfMonth++;
        dayOfWeek = 0;
      }
      // Move to next month
      if (currentDate.format('MMMM YYYY') !== currentMonth) {
        currentMonth = currentDate.format('MMMM YYYY');
        this.months[currentMonth] = new MonthData(currentDate.format('MMMM YYYY'), []);
        dayOfWeek = currentDate.day();
        weekOfMonth = 0;
      }
    }
  }

  ngOnChanges(): void {
    this.loadCalendarData();
  }

  displayMonth(month: string): boolean {
    return this.months[month] && this.months[month].weeks.length > 0;
  }



}
