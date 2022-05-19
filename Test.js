// Longest Sequence //

function longestSequence(sequence) {
    return sequence
        .match(/(.)\1*/g)
        .sort((a, b) => b.length - a.length)
        .filter((a, i, arr) => a.length === arr[0].length)
}
longestSequence("dghhhmhmx");
longestSequence("dhkkhhKKKt");
longestSequence("aBbBadddadd");

// Savings Account Balance //

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
    let countInterest = Math.round((openingSum / 100) * interestRate)
    let monthlySum = openingSum + countInterest;
    let taxCount;
    let updatedSum;
    if (openingSum < taxFreeLimit) {
        taxCount += 0;
    }
    else {
        taxCount = ((monthlySum - taxFreeLimit) * taxRate) / 100
    }
    updatedSum = (monthlySum - taxRate); // * numMonths;
}
balance(10000, 1, 20000, 1, 2);
balance(25000, 2, 20000, 1, 2);
balance(19800, 2, 20000, 1, 2);

// Recursive Reverse String //

function reverseString(string) {
    if (string.length === 0) {
        return string;
    }
    if (string.length === 1) {
        return string;
    }
    else {
        return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
    }
    return string
}
reverseString('abcb')
reverseString('test')
reverseString('racecar')

// Time Class //

class Time {
    constructor(hours, minute, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}