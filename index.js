// example data
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function () { }, () => { }, 10, 100, {}];
const exampleArray2 = [[10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]];

//object
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function cleanArray(myArray) {
    arrayFixed = [];
    for (let i in myArray) {
        if (typeof myArray[i] == 'number') {
            arrayFixed.push(myArray[i]);
        }
    }
    return arrayFixed;
}
//console.log(cleanArray(exampleArray));

// Ej 1: Encontrar número con programacion funcional
function findNumber(myArray, number) {
    let index = myArray.indexOf(number);
    return "El número " + number + " está en el índice " + index;
}

//console.log(findNumber(exampleArray,4));

// Ej 1: Encontrar número con programacion declarativa
function findNumberBetter(myArray, number) {
    let position = 0;
    myArray.map((value, index) => {
        if (value == number) position = index;
    })
    return "El número " + number + " está en el índice " + position;;
}

// console.log(findNumberBetter(exampleArray,4));

// Ej 2: Funcion limpiadora con programacion declarativa
let cleanedArray = shit.filter((value) => typeof value == 'string');

//console.log(cleanedArray);

// Ej 3: Encontrar distancia entre 2 puntos
function calculateDistance(obj, obj2) {
    finalObj = {};
    for (let i in obj2) {
        auxDistance(i,obj,obj2);
    }
    return finalObj; 
}
    
function auxDistance(i,obj,obj2){
    if (obj.hasOwnProperty(i)) {
        finalObj[i] = (obj2[i]) - (obj[i]);
    }
}

myFirstObj = new Point(10, 3);
mySecondObj = new Point(17, 8);
// console.log(calculateDistance(myFirstObj, mySecondObj));

