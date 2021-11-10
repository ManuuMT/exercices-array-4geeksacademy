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
        // Si el elemento del array cumple con la condicion
        // es pusheado dentro de la nueva array limpia
        if (typeof myArray[i] == 'number') {
            arrayFixed.push(myArray[i]);
        }
    }
    return arrayFixed;
}


// Ej 1: Encontrar número con programacion funcional
function findNumber(myArray, number) {

    let arrayOfIndex = [];
    // Almaceno en index el resultado de aplicarle el metodo indexOf al array
    // Si encuentra el numero buscado, la funcion devuelve su posicion
    // De lo contrario devuelve -1
    let index = myArray.indexOf(number);
    if (index == -1) return "Número no encontrado";

    // Mientras que index sea distinto de -1, es decir, mientras siga encontrando al numero
    // Vamos a pushear en myArray las posiciones donde se encuentre 
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

    // Mapeo el array y donde encuentre values igual al numero buscado
    // Se agrega al array la posicion del numero, mediante el metodo push
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
        console.log(i);
        // Llamaremos a la funcion auxDistance por cada  
        // elemento que haya dentro del segundo objeto
        auxDistance(i, obj, obj2);
    }
    return finalObj;
}

function auxDistance(i, obj, obj2) {
    // Si dentro del objeto 1 existe la propiedad indicada
    if (obj.hasOwnProperty(i)) {
        // Creamos una clave con ese nombre en un nuevo objeto, luego
        // le asignamos como valor la diferencia entre las claves del obj1 y obj2
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
    // Recorremos el array concatenando cada subindice en un nuevo array 
    // De esta manera obtendremos un nuevo array descompuesto   
    for (let i in array) simpleArray = simpleArray.concat(array[i]);
    return simpleArray;
}

// Funcion que encuentra al array de menor longitud
function findIndex(array, array2) {
    // Asignamos la longitud por defecto a la del primer array
    let long = array.length;
    // Comparamos longitudes entre arrays. La que sea menor será asignada a long
    // En caso de ser iguales, ya tendriamos asignado un valor anteriormente
    if (array.length < array2.length) long = array.length;
    if (array.length > array2.length) long = array2.length;

    return long;
}

// Funcion que compara los elementos entre 2 arrays
function arrayOfBooleans(array, array2, index) {
    let arrayBool = [];
    for (let i = 0; i < index; i++) {
        // Si los elementos son iguales, pusheamos un true en el array
        if (array[i] === array2[i]) {
            arrayBool.push(true);
        }
        // De lo contrario, pusheamos un false
        else arrayBool.push(false);
    }
    // Finalmente retornamos nuestro array compuesto unicamente de booleanos
    return arrayBool;
}

// ↓ Des-comentar para llamar a la funcion
//compareArrays(exampleArray, exampleArray2);