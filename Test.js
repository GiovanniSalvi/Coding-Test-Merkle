// Longest Sequence //
function longestSequence(sequence) {
    let str = sequence
          .match(/(.)\1*/g)
          .sort((a, b) => b.length - a.length)
          .filter((a, i, arr) => a.length === arr[0].length)
    return '{' + str[0].charAt(0) + ':' + str[0].length + '}'
  }
  console.log(longestSequence("dghhhmhmx"));
  console.log(longestSequence("dhkkhhKKKt"));
  console.log(longestSequence("aBbBadddadd"));


// Savings Account Balance //

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
    let updatedSum = openingSum;
    for (let i = 0; i < numMonths; i++){    
      let countInterest = Math.round((updatedSum / 100) * interestRate)
      let monthlySum = updatedSum + countInterest;
      let taxCount = 0;
      if (updatedSum < taxFreeLimit) {
          taxCount += 0;
      }
      else {
          taxCount = ((updatedSum - taxFreeLimit) * taxRate) / 100
      }
      updatedSum = (monthlySum - taxCount);
    }
    return updatedSum;
}
console.log(balance(10000, 1, 20000, 1, 2));
console.log(balance(25000, 2, 20000, 1, 2));
console.log(balance(19800, 2, 20000, 1, 2));

// Recursive Reverse String //

function reverseString(string) {
  let str;
    if (string.length === 0) {
      return string;
    }
    if (string.length === 1) {
      return string;
    }
    else {
      str = string.substring(1) + string.charAt(0);
      return str;
    }
}
var string = 'abcd';
var strLen = string.length;
var str = string
for(let i = 0; i < strLen -1 ; i++){
  str = reverseString(str)
  console.log(str)
}
 

// Time Class //

class Time {
  constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      if(this.seconds >= 60){
        this.minutes += Math.floor(seconds / 60);
        this.seconds = seconds % 60;
      }
      if(this.minutes >= 60){
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
      }
  }
  timeString(){
    let hh = this.hours;
    let mm = this.minutes;
    let ss = this.seconds;
    if(this.hours < 10){
      hh = '0' + this.hours; 
    }
    if(this.minutes < 10){
      mm = '0' + this.minutes; 
    }
    if(this.seconds < 10){
      ss = '0' + this.second; 
    }
    return hh + ':' + mm + ':' + ss
  }
  scale(int){
    scaleSec = int % 60;
    this.seconds += scaleSec;
    if(this.seconds > 60){
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
    }
    scaleMin = Math.floor(int / 60);
    this.minutes += scaleMin;
    if(this.minutes >= 60){
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }
}
}
var t = new Time( 1, 30, 20 );
console.log(t.timeString());
console.log(t.scale( 400 ));
console.log(t.timeString());