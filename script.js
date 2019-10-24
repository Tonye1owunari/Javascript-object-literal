//A trip to objectville--------------------------------------------------------
//how to create an object-----------------pg177
//object magnet pg183-------------------------------------------
var dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
};

var bark;
if(dog.weight > 20) {
    bark = 'WOOF WOOF!';
}else {
    bark = 'woof woof!';
}
var speak = `${dog.name} says ${bark} when he wants to ${dog.activity}`;
console.log(speak);

/***************************
Let’s say you’re looking for a good car for your stay in regina. Your criteria?
❏ Built in 1960 or before.
❏ 10,000 miles or less.
Below is a function that makes your life easier! pg188.
*********************************/
function prequal(car) {
    if(car.mileage > 10000) {
        return false;
    }else if(car.year > 1960) {
        return false;
    }else {
        return true;
    }
}

//===================================================================

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var worthALook = prequal(taxi);
if(worthALook) {
    console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
}else {
    console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);
}

//==================================================================

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
var worthALook = prequal(cadi);
if(worthALook) {
    console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
}else {
    console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);
}

//====================================================================

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};
var worthALook = prequal(chevy);
if(worthALook) {
    console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
}else {
    console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);
}
