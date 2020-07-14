var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {return [element, ...array];}
function addElementToEndOfArray(array, element) {return [...array, element];}

function removeElementFromBeginningOfArray(array) {return array.slice(1, array.length);}
function removeElementFromEndOfArray(array) {return array.slice(0, array.length - 1);}

function destructivelyAddElementToBeginningOfArray(array, element) {return array.push(element);}
function destructivelyAddElementToEndOfArray(array, element) {return array.unshift(element);}

function destructivelyRemoveElementFromBeginningOfArray(array) {return array.pop();}
function destructivelyRemoveElementFromEndOfArray(array) {return array.shift();}

function accessElementInArray(array, element) {return array[element];}