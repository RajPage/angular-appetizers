import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secsToTime'
})
export class SecsToTimePipe implements PipeTransform {

  transform(value: number, format: string = "full"): string {
    let time_string = "";
    let secs = value
    let days = Math.floor(secs / 86400);
    
    secs -= days * 86400;
    let hour = Math.floor(secs / 3600);
    secs -= hour * 3600;
    let min = Math.floor(secs / 60);
    let sec = secs - min * 60;

    if (format == "full") {
      if (days > 0) {
        time_string += days + " day" + (days == 1 ? "" : "s");
      }
      if (hour > 0) {
        time_string += hour + " hour" + (hour == 1 ? "" : "s");
      }
      if (min > 0) {
        time_string += min + " min" + (min == 1 ? "" : "s");
      }
      if (sec > 0) {
        time_string += sec + " sec" + (sec == 1 ? "" : "s");
      }
    } else if (format == "timer") {
      if (days > 0) {
        time_string += this.formatNumber(days) + " : ";
      }
      if (hour > 0) {
        time_string += this.formatNumber(hour) + " : ";
      }
      time_string += this.formatNumber(min) + " : " + this.formatNumber(sec);
    }

    return time_string;
  }

  formatNumber(num: number): string {
    return ("0" + num).slice(-2)
  }

}
