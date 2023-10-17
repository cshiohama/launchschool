class Robot {
  constructor() {
    this.robotname = Robot.randomName();
  }
  
  name() {
    return this.robotname;
  }
  
  reset() {
    Robot.robots.splice(Robot.robots.indexOf(this.robotname), 1);
    this.robotname = Robot.randomName();
  }
  
  static robots = [];
  
  static randomName() {
    let result;
    
    do {
      result = '';
      
      for (let i = 0 ; i < 2 ; i++)
        result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Robot.random(26)];
    
      for (let i = 0 ; i < 3 ; i++)
        result += '0123456789'[Robot.random(10)];

    } while (Robot.robots.includes(result))
    
      Robot.robots.push(result);
      return result;
  }
  
  static random(highest) {
    return Math.floor(Math.random() * highest);
  }
}

module.exports = Robot;


