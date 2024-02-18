// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let  BikesModels : string[] = ["Honda","Unique","Hi-Speed","Super-Star"] ;

// Error
var Bikes = BikesModels[6];

console.log(Bikes); // Accessing an index that is not in Array

// Correct Code

var CorrectCode = BikesModels[1];

console.log(CorrectCode);

