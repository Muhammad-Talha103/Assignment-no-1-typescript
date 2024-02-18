//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



var magicianNames = ["Merlin", "David Copperfield", "Curtis Adams", "Penn and Teller","David Abbot","Simo Aalto"];

function show_magician(magicians:string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}


show_magician(magicianNames);
