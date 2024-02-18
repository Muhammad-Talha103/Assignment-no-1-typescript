// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

 function Order_Sandwich(flavor: string, ...items: string[]): void {
     console.log("Sandwich Summary:");
    
     if (items.length === 0) {
         console.log(`You ordered a ${flavor} sandwich with no additional items.`);
     } else {
         console.log(`You ordered a ${flavor} sandwich with: ${items.join(', ')}`);
     }
    
    console.log(); 
    }

 Order_Sandwich("Club","Veggie","BBQ","Cumcumber");
 Order_Sandwich("Grill","Tomato");
 Order_Sandwich(""); 

