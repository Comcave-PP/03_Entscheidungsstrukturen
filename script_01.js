"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 25;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if(ageJohn > ageMark){
//     console.log("John ist älter als Mark");
// }

/************ IF / ELSE ************/
// mit Alternative  
// entweder ja oder nein

// if(isJohnOlder){
//     console.log("John ist älter als Mark");
// }
// else{
//     console.log("John ist jünger als Mark");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


// Stimmt aber nicht wenn John und Mark gleich alt sind, deswegen:
/************ IF / ELSE IF ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder)  // Überprüfung ob John älter ist
// {
//     console.log("John ist älter als Mark"); // Ausgabe
// }
// else if(isJohnEqual)  // Überprüfung ob John und Mark gleich alt sind
// {
//     console.log("John und Mark sind gleich alt");  // Ausgabe
// }
// else  // John ist jünger als Mark
// {
//     console.log("John ist jünger als Mark"); // Ausgabe
// }


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";     // .. fährt TAXI! / UBER
job = "diver";      // .. taucht im Rhein! 
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
job = "teacher";    // .. unterrichtet!
job = "instructor";  // .. unterrichtet!

switch (job) {
    case "driver":
        console.log("Jane fährt TAXI");
        break;

    case "diver":    
        console.log("Jane ist ein Taucher");
        break;
    case "artist":    
        console.log("Jane malt Bilder");
        break;
    case "teacher":
    case "instructor":    
        console.log("Jane unterrichtet");
        break;
        

    default:
        console.log("Jane macht etwas anderes");
        break;
}