// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function CarInfo (maker:string,model:string,...otherfeature:[string,any][]):any{
    let car:any ={
        maker,
        model,
    }
    for(let [features,value]of otherfeature){
        car  [features] = value
    }
    return car;
}

let CarDetails:string = CarInfo ("Toyota","Grande",["Additional Features","Sunroof"],["Max Speed",280],["Color","White"]);

console.log(CarDetails)