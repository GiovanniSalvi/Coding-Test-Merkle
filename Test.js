      // Longest Sequence //

function longestSequence(sequence) {
    return sequence
            .match(/(.)\1*/g)
            .sort((a,b) => b.length - a.length)
            .filter((a,i,arr) => a.length === arr[0].length)
  }
  console.log(longestSequence("dghhhmhmx"));
  console.log(longestSequence("dhkkhhKKKt")); 
  console.log(longestSequence("aBbBadddadd"));

      // Savings Account Balance //

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths){
    let openingSum;
    
}

     // Recursive Reverse String //

function reverseString(string){
    var str = ''
    if (string.length === 0){
        return string;
    }
        if (string.length === 1){
            return string;
        }
        else{
            return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
        }
}
reverseString('abcb')

     // Time Class //

class Time {
    constructor(hours, minute, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}