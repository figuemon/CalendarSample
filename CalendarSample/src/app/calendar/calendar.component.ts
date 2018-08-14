import { Component, OnChanges, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnChanges {

  constructor() { }

  @Input()
  startDate: Date;

  @Input()
  numberOfDays: number;

  private startMoment: moment.Moment;

  private endMoment: moment.Moment;

  ngOnChanges(): void {
    this.startMoment = moment(this.startDate);
    this.endMoment = this.startMoment.add(this.numberOfDays, 'days');
  }





}
