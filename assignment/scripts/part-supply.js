console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
let removedItem = supplyChanges.pop();
console.log('4. Removed item:', removedItem);
//below is a test to see if it was removed from array
//console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for(let x=0; x<supplyChanges.length; x++){
   if(supplyChanges[x] > 0){
    console.log(`Added ${supplyChanges[x]} parts.`);
   }
   else if(supplyChanges[x] === 0){
    console.log('No change.');
   }
   else{
    let postiveNumber = Math.abs(supplyChanges[x]);
    console.log(`Removed ${postiveNumber} parts.`);
   }
   }



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for(number of supplyChanges){
    console.log('for of loop:', number);
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let sum = 0;
for(let i=0; i<supplyChanges.length; i++){
    sum += supplyChanges[i];
}
console.log('8. Total supplies available is:', sum);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let boxes = 0;
let parts = 572;

while (parts >= 7) {
  // how should one loop iteration modify boxes?
  boxes++;
  parts -= 7;
  // how should one loop iteration modify parts?
}

// After loop is done, we should be able to log:
console.log(`We filled ${boxes} boxes.`);
console.log(`There were ${parts} left over.`);


//I couldn't get the below code to work.  It runs one too many times.  I am wondering how to 
//get this logic to work correctly/ as I intended.  Thanks for your thoughts!
/*
let totalBoxes = 0;
let partsLeft = 0;
let startingParts = 572;
while(totalBoxes * 7 <= 572){
    startingParts -= 7;
    totalBoxes++;
    partsLeft = startingParts -7;

}
console.log(totalBoxes);
console.log(partsLeft);
*/


