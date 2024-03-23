/* 
    Using the Array.From it's possible to create an
    array with a preset range and even define a base
    value for all of it's elements
*/


const lolArray = Array.from({length:100}, el => "lol")


const arrayOneToOneHundred = Array.from({from:100}, (el, indx) => indx + 1);