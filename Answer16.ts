//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.


let friend=["Faiz","Zia","Jahanzeb","Junaid","Saqib"]

friend.forEach(Invited => {
    console.log("Hello "+ Invited + "! now i find bigger table for dinner")
 })

 //• Add one new guest to the beginning of your array

 friend.unshift("Talha");
 console.log(friend);    //beginning of your array

 //• Add one new guest to the middle of your array

let middleIndex = Math.floor(friend.length / 2);

friend.splice(middleIndex, 0, "Saim");  //in middle of array

console.log(friend);

//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

friend.push("Muzammil");

console.log(friend);


