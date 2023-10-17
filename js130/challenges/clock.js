class Clock {
  constructor(hour, minute) {
    this.hour = hour
    this.minute = minute;
  }
  
  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }
  
  add(min) {
    let hour = this.hour;
    let minute = this.minute + min;
    
    while(minute >= 60) {
      hour += 1;
      minute -= 60;
    }
    
    while(hour >= 24) {
      hour -= 24;
    }
    
    return new Clock(hour, minute);
  }
  
  subtract(min) {
    let hour = this.hour;
    let minute = this.minute - min;
    
    while (minute < 0) {
      hour -= 1;
      minute += 60;
    }
    
    while (hour < 0) {
      hour += 24;
    }
    
    return new Clock(hour, minute);
  }
  
  toString() {
    let result = '';
    
    if (this.hour < 10) result += '0';
    result += this.hour + ':';
    
    if (this.minute < 10) result += '0';
    result += this.minute;
    
    return result;
  }
  
  isEqual(clock2) {
    return this.hour === clock2.hour && this.minute === clock2.minute;
  }
}

module.exports = Clock;