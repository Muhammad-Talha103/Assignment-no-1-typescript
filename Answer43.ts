// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicianNames = ["Merlin", "David Copperfield", "Curtis Adams", "Penn and Teller","David Abbot","Simo Aalto"];


function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}


const greatMagicians: string[] = make_great([...magicianNames]);


console.log("Original Magicians:");
show_magicians(magicianNames);


console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
