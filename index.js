// example data
const exampleArray = [10, 4, 100, 35, 31, 4, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function () { }, () => { }, 10, 100, {}];
const exampleArray2 = [[10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]];

//object
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// Funcion limpiadora de numeros
function cleanArray(myArray) {
    arrayFixed = [];
    for (let i in myArray) {
        if (typeof myArray[i] == 'number') {
            arrayFixed.push(myArray[i]);
        }
    }
    return arrayFixed;
}


// Ej 1: Encontrar número con programacion funcional
function findNumber(myArray, number) {

    let arrayOfIndex = [];
    let index = myArray.indexOf(number);

    while (index != -1) {
        arrayOfIndex.push(index);
        index = myArray.indexOf(number, index + 1);
    }

    return "El número " + number + " está en los índices " + arrayOfIndex;
}
// ↓ Des-comentar para llamar a la funcion
//console.log(findNumber(exampleArray,4));


// Ej 1: Encontrar número con programacion declarativa
function findNumberBetter(myArray, number) {
    let arrayOfIndex = [];
    myArray.map((value, index) => {
        if (value == number) arrayOfIndex.push(index);
    })
    return "El número " + number + " está en los índices " + arrayOfIndex;
}
// ↓ Des-comentar para llamar a la funcion
//console.log(findNumberBetter(exampleArray, 4));



// Ej 2: Funcion limpiadora con programacion declarativa
let cleanedArray = shit.filter((value) => typeof value == 'string');

// ↓ Des-comentar para llamar a la funcion
//console.log(cleanedArray);



// Ej 3: Encontrar distancia entre 2 puntos
function calculateDistance(obj, obj2) {
    finalObj = {};
    for (let i in obj2) {
        auxDistance(i, obj, obj2);
    }
    return finalObj;
}

function auxDistance(i, obj, obj2) {
    if (obj.hasOwnProperty(i)) {
        finalObj[i] = (obj2[i]) - (obj[i]);
    }
}

myFirstObj = new Point(10, 3);
mySecondObj = new Point(17, 8);

// ↓ Des-comentar para llamar a la funcion
// console.log(calculateDistance(myFirstObj, mySecondObj));



// Ej 4: Funcion que compara 2 arrays de M x N 
function compareArrays(myArray, myArray2) {

    // Convierte los arrays de M x N elementos en un array de N elementos
    let myNewArray = convertIntoSimpleArray(myArray);
    let myNewArray2 = convertIntoSimpleArray(myArray2);

    // Busca la longitud del array mas pequeño entre 2 arrays y lo almacena en index
    let index = findIndex(myNewArray, myNewArray2);

    // finalArray va a almacenar un array de booleanos
    let finalArray = arrayOfBooleans(myNewArray, myNewArray2, index);

    console.log(myNewArray);
    console.log(myNewArray2);
    console.log(finalArray);

}

// Funcion que convierte una array de arrays en una unica array que facilita la comparacion
function convertIntoSimpleArray(array) {
    let simpleArray = [];
    for (let i in array) simpleArray = simpleArray.concat(array[i]);
    return simpleArray;
}

// Funcion que encuentra al array de menor longitud
function findIndex(array, array2) {
    let long = array.length;
    if (array.length < array2.length) long = array.length;
    if (array.length > array2.length) long = array2.length;

    return long;
}

// Funcion que comparar los elementos entre 2 arrays
function arrayOfBooleans(array, array2, index) {
    let arrayBool = [];
    for (let i = 0; i < index; i++) {
        if (array[i] === array2[i]) {
            arrayBool.push(true);
        }
        else arrayBool.push(false);
    }
    return arrayBool;
}

// ↓ Des-comentar para llamar a la funcion
//compareArrays(exampleArray, exampleArray2);

