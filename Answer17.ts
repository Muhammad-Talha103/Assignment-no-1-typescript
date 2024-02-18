//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

// Previous guests
let previousguests: string[] = ["talha", "ahmed", "Zia", "Saim", "Jahanzeb", "Junaid", "Saqib", "Faiz"];

previousguests.forEach(Invited => {
    console.log("Dear "+ Invited + "! now i inviting only two guest because table can't arrives on time")
 })


// Remove guests 
while (previousguests.length > 2) {
   let removed= previousguests.pop();
    console.log("Sorry Dear "+ removed+"! Dinner is canceled. ");
}

previousguests.forEach(newguest => {
    console.log("Dear" +newguest+"You are still invited to dinner.");
});

// Remove the last two names from the list 
previousguests.pop();
previousguests.pop();

// Now Empty
console.log("Empty:", previousguests);

