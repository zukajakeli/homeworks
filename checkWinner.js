// Curling Task

let powerRangers = {
  case1: [44, 23, 71],
  case2: [85, 54, 41],
};

let fairyTails = {
  case1: [65, 54, 49],
  case2: [23, 34, 47],
};

// Function for calculating avarage score
function calcAvarage(x, y, z) {
  let result = (x + y + z) / 3;
  return result;
}

//Task 2 calculating avarage scores for teams
let averagePW1 = calcAvarage(
  powerRangers.case1[0],
  powerRangers.case1[1],
  powerRangers.case1[2]
);
let averageFT1 = calcAvarage(
  fairyTails.case1[0],
  fairyTails.case1[1],
  fairyTails.case1[2]
);

let averagePW2 = calcAvarage(
  powerRangers.case2[0],
  powerRangers.case2[1],
  powerRangers.case2[2]
);
let averageFT2 = calcAvarage(
  fairyTails.case2[0],
  fairyTails.case2[1],
  fairyTails.case2[2]
);

//Task 3 creating checkWinner function
function checkWinner(average1, average2) {
  if (average1 >= 2 * average2) {
    console.log(`First team won - ${average1} vs ${average2}!`);
  } else if (average2 >= 2 * average1) {
    console.log(`Second team won - ${average2} vs ${average1}!`);
  } else if (average1 == average2) {
    console.log(`It is deuce - ${average1} vs ${average2}!`);
  } else {
    console.log(
      `Noone is winner and the score is - ${average1} vs ${average2}`
    );
  }
}

checkWinner(averagePW1, averageFT1);
checkWinner(averagePW2, averageFT2);

//Tip calculator Task

//Task 1 - create calcTip function

function calcTip(x) {
  if (x >= 50 && x <= 300) {
    return x * 0.15;
  } else {
    return x * 0.2;
  }
}

// Task 2
let expenses = {
  foodCost: [22, 295, 176, 440, 37, 105, 10, 1100, 96, 52],
};

expenses.tips = []; // ეს შემეძლო რომ ასე ცალკე არ შემექმნა და ქვევით ლუფში, როდესაც თიფებს დავითვლიდი მაშინ შემექმნა ერეი?

//Task 3
for (cost of expenses.foodCost) {
  let x = calcTip(cost);
  expenses.tips.push(x);
}

//Task 4
expenses.totalCost = [];

for (let i = 0; i < expenses.foodCost.length; i++) {
  result = expenses.foodCost[i] + expenses.tips[i];
  expenses.totalCost.push(result);
}

//Task 5

function calcArrayAver(array) {
  let sum = 0;
  for (n of array) {
    sum += n;
  }
  return sum / array.length;
}

expenses.averageTip = calcArrayAver(expenses.tips);
expenses.averageTotal = calcArrayAver(expenses.totalCost);

console.log(expenses);
