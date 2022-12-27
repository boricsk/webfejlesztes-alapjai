//a min és sum változót hogyan definiálnád? Miért

const f = (scores) => {
    const min = 30; // nem vált. az értéke
    let sum = 0; // változni fog az értéke
    
    scores.forEach((score) => (sum += score));
    
    if (sum < min) {
        console.log('Failed');
    }
    return sum;
};
f([5, 3, 2]);
f([7, 12, 20]);

//Mit ír ki az alábbi kód?
const firstName = 'John';
const age = 25;

console.log(`Hello, my name is ${firstName} and I'm ${age} ${
    age === 1 ? 'year' : 'years'
} old`
);

//Hello my name is John and I'm 25 years old
//Hello my name is John and I'm 1 year old

/*
Sztringek - műveletek
Írjunk egy függvényt, amely két sztringet vár paraméterül, a függvény fűzze össze a két
sztringet és térjen vissza az eredménnyel. Hívjuk meg ezt a függvényt, majd írjuk ki a
visszatérési értéket a console-ra, írjuk még ki az eredmény sztring hosszát, valamit az 5.
karaktert. Mit kapunk, ha az összefűzött sztring nincs 5 karakter hosszú?
*/

const strAdd = (str1, str2) => {
    let res;
    res = str1+str2;
    return res;
};

let myString = strAdd('Hello','világ!');

console.log(myString.length);
console.log(myString.charAt(4));
console.log(myString.charAt(103)); //üres lesz mert nincs ilyen pozíció

/*
Írjuk át egyszerűbb szintaktikai formára az alábbi formára, milyen karaktereket hagyhatunk
el?

const f = (a) => {
    return a + 4;
}
*/
const f1 = a => a + 4;

/*
Tömbök - műveletek
Hozzunk létre egy tömböt, amelyben olyan objektumok találhatók, amelyek kulcsai:
“firstName”, “lastName”, “age”. Létrehozáskor egy elemet tegyünk a tömbbe, majd a “push”
metódus segítségével még két elemet adjunk a tömbhöz. Írjuk ki a tömb hosszát, és a
legelső elemet a console-ra. A “splice” metódus segítségével töröljük a 2. elemet a tömbből.
*/

const myArray = [
    {firstName:'chris',
     lastName: 'lastChris', 
     age:47}
];

console.log(myArray);

myArray.push({firstName: 'second first name', lastName: 'second last name', age:25});
myArray.push({firstName: 'third first name', lastName: 'third last name', age:18});


console.log(myArray.length);
console.log(myArray[1]);
myArray.splice(1,1);
console.log(myArray);
console.log(myArray.length);


/*
Primitív vs referencia típusok
Osztályozzuk az alábbi érték típusokat aszerint, hogy primitív vagy referencia típusnak
számítanak-e:
● string -P
● Object -R
● Function -R
● Array -R
● bool -P
● Date -R
● number -P
*/


//Keress 3 módot a tömbön való végigiterálásra
for (let i = 0; i<=myArray.length - 1; i++) {
    console.log('For loop :',i + 1, myArray[i]);
};

let i = 0;
while (i <= myArray.length -1) { 
    console.log('While loop' ,i + 1, myArray[i]);
    i++; 
}

myArray.forEach((element, index) => {
    console.log(`Foreach ${index + 1}. ${element}`);
});

/*
Irjuk át a lenti kefejezést ?: formára

const f = (y) => {
    let res;
    if (y >= 0) {
        res = 2 * y;
    } else {
    res = -2 * y;
    }
        return res;
};
console.log(f(3));
console.log(f(-5));
*/

const fv = y =>{
    let res;
    res = y >= 0 ? 2 * y: -2 * y;
    return res;
}
console.log(fv(3));
console.log(fv(-3));

/*
Truthy vagy falsy

Mit ír ki?

const truthyOrFalsy = (n) => {
if (n) {
    console.log('truthy');
} else {
    console.log('falsy');
    }
}

truthyOrFalsy(''); -> Truthy -> Ez Falcy, mert primitiv.
truthyOrFalsy([]); -> Truthy
truthyOrFalsy(0); -> Falsy

*/

const truthyOrFalsy = (n) => {
if (n) {
    console.log('truthy');
} else {
    console.log('falsy');
        }
}
    
truthyOrFalsy(''); 
truthyOrFalsy([]); 
truthyOrFalsy(0); 

console.log(!!5); // true. 5 = true !5=flase !!5 = true.