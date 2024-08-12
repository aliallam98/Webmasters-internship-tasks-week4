// -----------------------------------------------------
// -----------------------------------------------------
// 1-
function findDuplicates(arrayOfNumbers) {
  const countMap = new Map();
  //   console.log(countMap);

  arrayOfNumbers.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });
  //   console.log(countMap);

  const duplicates = [];
  countMap.forEach((count, num) => {
    if (count > 1) {
      duplicates.push(num);
    }
  });
  return duplicates;
}
console.log(findDuplicates([1, 1, 2, 2, 5, 5, 9, 9, 0, 0]));

// -----------------------------------------------------
// -----------------------------------------------------
// 2-

function findPrimeNumbers(start, end) {
  const primes = [];

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(findPrimeNumbers(1, 20));

// -----------------------------------------------------
// -----------------------------------------------------
// 3-
function sortByWordLength(sentence) {
  const words = sentence.split(" ");

  words.sort((a, b) => a.length - b.length);

  return words.join(" ");
}
console.log(sortByWordLength("Ali Abdallah Ali Elsayed Allam"));


// -----------------------------------------------------
// -----------------------------------------------------
// 4-
function filterArray(array, filterFunction) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (filterFunction(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  function isOdd(num) {
    return num % 2 !== 0;
  }

  console.log(filterArray(numbers,isOdd));
  