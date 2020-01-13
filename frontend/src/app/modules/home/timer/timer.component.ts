import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { Timer } from '@base/app/shared/models/timer.model';
import { SecsToTimePipe } from '@base/app/shared/pipes/secs-to-time.pipe';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, AfterViewInit {
  timer_list: Array<Timer> = [];
  @ViewChildren('timerElem') timers: QueryList<ElementRef>

  constructor(
    public secsToTime: SecsToTimePipe
  ) { }

  ngOnInit() {
    this.addTimer(0, 2);
  }

  ngAfterViewInit(): void {
    this.setTimers();
  }

  startTimer(timer: Timer) {
    timer.startTimer();
  }

  pauseTimer(timer: Timer) {
    timer.pauseTimer();
  }

  resumeTimer(timer: Timer) {
    timer.resumeTimer();
  }

  resetTimer(timer: Timer) {
    timer.resetTimer();
  }

  removeTimer(id: number) {
    this.timer_list.splice(id, 1);
  }

  addTimer(sec: number, min: number, hour: number = 0, days: number = 0) {
    let timer = new Timer(sec, min, hour, days);
    this.timer_list.push(timer);
  }

  setTimers() {
    this.timers.toArray().forEach(timer => {
      let id = timer.nativeElement.id;
      let time_string = this.secsToTime.transform(this.timer_list[id].current_sec, "timer")
      timer.nativeElement.innerHTML = time_string;
    });
    setTimeout(
      () => {
        this.setTimers();
      }, 1000
    )
  }

}
