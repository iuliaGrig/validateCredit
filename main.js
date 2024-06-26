// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
let validateCred = arr => {
  // console.log("Full number: " + arr);

  // Remove last digit:
  let lastDigit = arr.pop();
  
  // console.log("Last digit: " + lastDigit);
  // console.log("Remaining digits: " + arr);

  // Loop starting from end from last digit, every second digit doubled:
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    let doubleDigit = arr[i] * 2;
    
    // For debugging purposes:
    // console.log("The digit: " + arr[i] + " Doubled digits: " + doubleDigit);
    
    // If doubleDigit > 9:
    if (doubleDigit > 9) {
      arr[i] = doubleDigit - 9;
      // console.log("Final digit value with correction: " + doubleDigit);
    } else {
      arr[i] = doubleDigit;
    }
  }

  let addSum = arr.reduce((acc, curr) => acc + curr, 0);
  // console.log("Total sum without last digit: " + addSum);

  addSum += lastDigit;
  // console.log("Total sum with last digit: " + addSum);  

  // console.log("New array: " + arr.concat(lastDigit));

  if (addSum % 10 === 0) {
    return "Valid";
  } else {
    return "Invalid";
  }
} 

let findInvalidCards = nestedArr => {
  // Array to store invalid cards:
  let invalidCards = [];

  // Loop thru nested arrays:
  for (let i = 0; i < nestedArr.length; i++) {

      // Validate card numbers:
      let result = validateCred(nestedArr[i]);
      // console.log("The array is: " + result);
      // If result is 'invalid':
      if (result === 'Invalid') {
        invalidCards.push(nestedArr[i]);
      }
    }
  return invalidCards;
}


// Invalid card numbers inside the batch:
console.log(findInvalidCards(batch));

let idInvalidCardCompanies = invalidArr => {
  let company = []
  for (let i = 0; i < invalidArr.length; i++) {
    let firstDigit = invalidArr[i][0];

    // Find case for firstDigit:
    switch(firstDigit) {
      case 3:
        if (!company.includes("Amex (American Express)")) {
          company.push("Amex (American Express)")
        }
        break;
      case 4:
        if (!company.includes("Visa")) {
          company.push("Visa");
        }
        break;
      case 5:
        if (!company.includes("Mastercard")) {
          company.push("Mastercard");
        }
        break;
      case 6:
        if (!company.includes("Discover")) {
          company.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
    }
  }
  return company;
}

console.log(idInvalidCardCompanies(batch));































