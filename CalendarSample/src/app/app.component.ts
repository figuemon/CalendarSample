import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalendarSample';
  startDate: Date = new Date();
  days: number = 0;
  countryCode = "US";
}
