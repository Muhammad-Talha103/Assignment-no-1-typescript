// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Step 1:• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


let GuestList = ["Faiz","Zia","Jahanzeb","Junaid","Saqib"];

GuestList.forEach(InvitedGuest => {
   console.log("Dear "+ InvitedGuest + " You Are Cordially Invited To Dinner On 14-February-2024 at 9:00 PM.")
})

let Guestcantmake = GuestList[3]

console.log(Guestcantmake + " Can't make it to the Dinner");

// Step 2: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

GuestList[3] = "Saim";

console.log(GuestList);

// Step3 :• Print a second set of invitation messages, one for each person who is still in your list.

GuestList.forEach(InvitedGuest => {
    console.log("Dear "+ InvitedGuest + " You Are Cordially Invited To Dinner On 14-February-2024 at 9:00 PM.")
 })




