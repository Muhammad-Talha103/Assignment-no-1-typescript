//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


var magicianNames2 = ["Merlin", "David Copperfield", "Curtis Adams", "Penn and Teller","David Abbot","Simo Aalto"];

function MakeGreat(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

function ShowMagicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}


MakeGreat(magicianNames2);


ShowMagicians(magicianNames2);
