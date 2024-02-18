

var favorite : Array<[transport:string,brand:string]>  = []

favorite.push(["Bike","Honda"])
favorite.push(["Car","Toyota"])
favorite.push(["Car","Audi"]);
favorite.push(["Car","Tesla"])



favorite.forEach(([transport,brand]) => {
   console.log("I Would Like To Own " + brand   +   transport)
})
