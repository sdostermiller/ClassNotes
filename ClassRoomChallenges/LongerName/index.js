let myName = "Shanna";
let myBestFriend = "Becca";

const myNameLength = myName.length;
const myBestFriendLength = myBestFriend.length;


console.log (myName.length);
console.log (myBestFriend.length);

let difference = myName.length - myBestFriend.length;

if (myNameLength > myBestFriendLength) {
    console.log (`My name is longer than ${myBestFriend}'s by ${difference} letters`);
} else if (myBestFriendLength > myNameLength) {
    console.log(`${myBestFriend} name is longer than mine by ${difference} letters`);
} else (myBestFriend.length = myName.length); 
    console.log ("Our names are the same length.");

