// Task 1

let friends1 = ['George', 'Nick', 'Tom', 'Kate', 'Annie']; // = > ["Nick", "Kate"]
let friends2 = ['James', 'Will', 'Jack', 'Nate', 'Edward']; //  = >  ["Will", "Jack", "Nate"]

function findFriend(array) {
  let newArray = [];
  for (item of array) {
    if (item.length == 4) {
      newArray.push(item);
    }
  }
  console.log(newArray);
  return newArray;
}

findFriend(friends1);
findFriend(friends2);

// Task 2

let array1 = [5, 8, 12, 19, 22]; // => 5 + 8 = 13
let array2 = [52, 76, 14, 12, 4]; // => 4 + 12 = 16
let array3 = [3, 87, 45, 12, 7]; //  => 3 + 7 = 10

function sumTwoSmallest(array) {
  let lowest = Math.min(...array);
  array.splice(array.indexOf(lowest), 1);
  let secondLowest = Math.min(...array);
  return lowest + secondLowest;
}

console.log(sumTwoSmallest(array1));
console.log(sumTwoSmallest(array2));
console.log(sumTwoSmallest(array3));

// console.log(array1.splice(array1.indexOf(5), 1));
