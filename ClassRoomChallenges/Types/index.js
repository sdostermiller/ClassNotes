var dog = {
    dogName: "Emmylou",
    breed: "Boxer",
    color: "white",
    naughty: true,
    age: 2,
    badGirl: {
        noNailTrim: true,
        chaseCat: true,
        meanToKids: false
    }
}

console.log (`${dog.dogName} is a naughty ${dog.color} ${dog.breed}.`)
console.log (dog.naughty)

if (typeof dog.dogName == "string") {
    console.log (`Yep, her name is ${dog.dogName}`);
} else if (typeof dog.dogname == "number") {
    console.log (`Yep, she's ${dog.age} years old.`);
} else if (typeof dog.naughty == "boolean") {
    console.log (`Yep, it's ${dog.naughty}, she's naughty.`);
} else if (typeof dog.badGirl == "object") {
    console.log ("It's complicated.")
}
else {
    console.log ("What are you?!")

}