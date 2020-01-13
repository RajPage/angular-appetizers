export class Timer {
    start_sec: number;
    current_sec: number;
    days: number;
    hour: number;
    min: number;
    sec: number;
    paused: boolean;

    constructor(sec: number, min: number, hour = 0, days = 0) {
        this.days = days;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.start_sec = days*86400 + hour*3600 + min*60 + sec; 
        this.current_sec = this.start_sec;
        this.paused = true;
    }
    
    startTimer() {
        this.current_sec = this.start_sec;
        this.paused = false;
        this.countdown();
    }

    countdown() {
        if (this.current_sec > 0 && !this.paused) {
            this.current_sec--;
            this.setTime();
            setTimeout(() => {
                this.countdown();
            }, 1000);
        }
    }

    setTime() {
        let secs = this.current_sec;
        this.days = Math.floor(secs / 86400);
        secs -= this.days * 86400;
        this.hour = Math.floor(secs / 3600);
        secs -= this.hour * 3600;
        this.min = Math.floor(secs / 60);
        this.sec = secs - this.min * 60;
    }

    pauseTimer() {
        this.paused = true;
    }

    resumeTimer() {
        this.paused = false;
        this.countdown();
    }

    resetTimer() {
        this.current_sec = this.start_sec;
        this.pauseTimer();
    }

}