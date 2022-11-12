import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription,share } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-timezonepage',
  templateUrl: './timezonepage.component.html',
  styleUrls: ['./timezonepage.component.css']
})
export class TimezonepageComponent implements OnInit {
 date:any;
 time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  constructor() {
   }

  ngOnInit(): void {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
