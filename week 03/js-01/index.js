let myFirsVar = "Hello"; //változó definiálás többszöri értékadáshoz
myFirsVar = 5;

//konstans
const onlyOne = 'Word!';
// onlyOne = 4 ez hiba, mert const-hoz nem lehet értéket rendlni még 1x

const s1 = 'I am a string';
const s2 = "Also a string";
const s3 = `String between backtick`; // ennél könnyebb változó értéket behelyettesíteni a str-be.

const age = 27;
const text = `I am ${age} years old.`;
const text2 = 'I am ' + age + 'years old';

const n1 = 5;
const n2 = 3.14;
const n3 = Number('34'); // str to num
const n4 = Number('not a number'); // nem hiba lesz, hanem NaN not a number értéket vesz fel a változó.

let isValid = true;
isValid = false;

//primitiv tipus értékátadás. primitiv tipusok esetén az ertekadadas mindig ertek szerint masolassal történik. 
//ez azt jelenti, hogy ha egy fgv-net paraméterul adunk egy olyan valtozot ami primitiv ertekre mutat akkor
//ha a fgv modositja az erteket az nem lesz hatassal az eredeti valtozora.

let num = 5;

//fgv letrehozas
//    nev   param => { fgv torzs };
const foo = (n) => {
    n = n * 2
    return n;
};

//meghivasa
num = foo(num); // a foo fgv egy masolattal fog melozni, ezert nincs hatassal az eredeti valtozora.
// ha az eredeti erteket modositani akarjuk, akkor kell a fooba egy return n; és a meghivas : num = foo(num);

//az eddigi tipusok primitiv tipusok voltak.

//referencia tipusok
//object tipus, kulcs ertek par, a kulcs sztring, az ertek barmi lehet.

const o = {
    name: 'Lizi',
    favoriteNumber: 5,

};

//tomb tipus ez az object-nek a leszarmazottja

const t = [1,2,3,'Lizi', true]

//uj elem felvitele a tombbe
t.push(23);

// vegigiteralas a tombbon. a foreach-nak átadott fgv-t hivja a tomb osszes elemere
//         fgv nev   fgv test
t.forEach((item) => {
    console.log(item); //a dev toolsban levo konzolra lehet infokat kilogolni
});

//kompaktabb szintaxis ha egy utasitas van a torzsben
t.forEach(item => console.log(item));

//fuggvenyek. ez is object leszarmazott.

//   nev   parameter  fgv test
const f = (a, b) => { return a + b; };

//regi szintaxis
function f2 (a, b) { return a + b;}

// a fgv- bemeneteihez nem lehet tipus megkotest alkalmazni.

console.log(f(5,6));
console.log(f('szia',' mia'));
console.log(f({},{})); // hivas ures objektummal

//const f3 = i => i.foo();
//f3(3);

//const és a let kulcsszavak
//const
//1x ertekadast tesz lehetove, viszont a referált értéket meg lehet változtatni.

const e = {
    name: 'Lizi',
    favoriteNumber: 5,

};

//e = { } ez hiba lesz mert const-ként van deklarálva

e.name = 'xyz';
console.log(e.name);


//referencia tipus értékátadás működése
//ref titus esetén a változó értéke egy referencia lesz, amely a memóriában lévő adatszerkezetre mutat.
//ha ilyet adunk át egy fgv-nek akkor ez lemásolásra kerül, amivel a fgv tud dolgozni.
//ha a fgv módosítja ezt az értéket az eredeti változóra nem vonatkozik, mert egy másolatrol van szó.
//

//obj. tipusú változó.
let pet = {
    name: 'Kitty',
    type: 'cat'
};

const bar = p => {
    p = {name: 'doggy', type: 'dog'};
    return p;
}
console.log('A változó értéke a bar hivas előtt', pet);
pet = bar(pet);
console.log('A változó értéke a bar hivas után', pet);
//a pet értéke ugyanaz maradt.
//ha azt akarjuk, hogy az eredeti változzon a bar metódusnak vissza kell térni az eredeti értékkel és ezt át kell adni a pets-nek.


const pet2 = {
    name:'Sammy',
    type:'snake'
};

const bar2 = p => {
    p.name = 'hammy',
    p.type = 'hamster'
};

console.log('A változó értéke a bar hivas előtt', pet2);
pet = bar2(pet2);
console.log('A változó értéke a bar hivas után', pet2);
//ez azért működik, mert az a referencia ami az adatszerkezetethivatkozik változatlan marad mert csak az adatszerkezetet módosítottuk


//none és a undefined értékek
let v;
console.log(v); // a létrehozott de nem inicializált változók értéke undefined lesz, ezt explicit módon mi is hozzárendelhetjük a változóhoz bármikor
v = undefined;
console.log(v)

v = null;
console.log(v); // ez is azt mutatja, hogy a változónak nem inicializát az értéke


//operátorok egyenlőség
const a = '5';
const b = 5;
console.log(a == b); //összehasonlítás. ha == használunk az összehasonlításkor nem követeli meg hogy ugyanazon tipusuak legyenek az operandusok, ezért lesz true az eredmény
console.log(a === b); // a === esetében figyelembe veszi a tipusát

//egyenlőség működése referencia tipusok (objektumok) esetén
const p1 = {name:'Zizi'};
const p2 = {name:'Zizi'};
console.log(p1 == p2);
console.log(p1 === p2); //mindkét esetben false mert nem ugyanarra a memoria területre referálnak. Ez nevezik referencia összehasonlítás.
const p3 = p1;
console.log(p1 == p3);
console.log(p1 === p3); //true lesz, mert ugyanarra a területre referálnak

//dinamikus tipusosság (a konkrét értékeknek van tipusa, a változóknak nincsen.)
let d = 5;
d = 'öt';
d = [1,2,3];
d = i => console.log(i)
d()

/*
Hozzárendelő operátorok

Name 	                            Shorthand operator 	        Meaning
Assignment 	                        x = f() 	                x = f()
Addition assignment 	            x += f() 	                x = x + f()
Subtraction assignment 	            x -= f() 	                x = x - f()
Multiplication assignment 	        x *= f() 	                x = x * f()
Division assignment 	            x /= f() 	                x = x / f()
Remainder assignment 	            x %= f() 	                x = x % f()
Exponentiation assignment 	        x **= f() 	                x = x ** f()
Left shift assignment 	            x <<= f() 	                x = x << f()
Right shift assignment 	            x >>= f() 	                x = x >> f()
Unsigned right shift assignment 	x >>>= f() 	                x = x >>> f()
Bitwise AND assignment 	            x &= f() 	                x = x & f()
Bitwise XOR assignment 	            x ^= f() 	                x = x ^ f()
Bitwise OR assignment 	            x |= f() 	                x = x | f()
Logical AND assignment 	            x &&= f() 	                x && (x = f())
Logical OR assignment 	            x ||= f() 	                x || (x = f())
Nullish coalescing assignment 	    x ??= f() 	                x ?? (x = f())

Összehasonlító operátorok
Operator 	                Description 	                                            Examples returning true
Equal (==) 	                Returns true if the operands are equal. 	                3 == var1 "3" == var1 3 == '3'
Not equal (!=) 	            Returns true if the operands are not equal. 	            var1 != 4 var2 != "3"
Strict equal (===) 	        Returns true if the operands are equal and 
                            of the same type. See also Object.is and sameness in JS. 	3 === var1
Strict not equal (!==) 	    Returns true if the operands are of the same type but 
                            not equal, or are of different type. 	                    var1 !== "3" 3 !== '3'
Greater than (>) 	        Returns true if the left operand is greater than the 
                            right operand. 	                                            var2 > var1 "12" > 2
Greater than or equal (>=) 	Returns true if the left operand is greater than 
                            or equal to the right operand. 	                            var2 >= var1 var1 >= 3
Less than (<) 	            Returns true if the left operand is less than 
                            the right operand. 	                                        var1 < var2 "2" < 12
Less than or equal (<=) 	Returns true if the left operand is less than or 
                            equal to the right operand. 	                            var1 <= var2 var2 <= 5

Aritmetikai operátorok
Operator 	                    Description 	                                        Example
Remainder (%) 	                Binary operator. Returns the integer remainder of 
                                dividing the two operands. 	                            12 % 5 returns 2.
Increment (++) 	                Unary operator. Adds one to its operand. If used 
                                as a prefix operator (++x), returns the value of its 
                                operand after adding one; if used as a postfix operator 
                                (x++), returns the value of its operand before adding 
                                one. 	                                                If x is 3, then ++x sets x to 4 and returns 4, 
                                                                                        whereas x++ returns 3 and, only then, sets x to 4.
Decrement (--) 	                Unary operator. Subtracts one from its operand. 
                                The return value is analogous to that for the 
                                increment operator. 	                                If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
Unary negation (-) 	            Unary operator. Returns the negation of its operand. 	If x is 3, then -x returns -3.
Unary plus (+) 	                Unary operator. Attempts to convert the operand to 
                                a number, if it is not already.                         +"3" returns 3. +true returns 1.
Exponentiation operator (**) 	Calculates the base to the exponent power, that 
                                is, base^exponent 	                                    2 ** 3 returns 8. 10 ** -1 returns 0.1. 


Bitwise operators
Operator 	            Usage 	Description
Bitwise AND 	        a & b 	Returns a one in each bit position for which the corresponding bits of both operands are ones.
Bitwise OR              a | b 	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
Bitwise XOR 	        a ^ b 	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
Bitwise NOT 	        ~ a 	Inverts the bits of its operand.
Left shift 	            a << b 	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating 
right shift 	        a >> b 	Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift 	a >>> b Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.   

Unary - Egyes alapú vagy 1 jelet használó
*/

//closures működése azt jeleni, hogy egy beágyazott fgv hozzáférhet a szülő fgv-ben definiált változókhoz.

const makeClosure = () => {
    const name = 'closure';
    const displayName = () => {
        //alert(name); // itt történik az, hogy a szülő fgv-ben definiált változót használjuk.
    }
    return displayName;
};

const testFn = makeClosure();
testFn();

//elágazások, ciklusok
//if else

const isPositive = (n) => { // ha egy bemenet van a zárójelek elhagyhatóak: const isPositive = n => ...
    if (n >= 0) { //nem csak logokai lehet, hanem bármi ami lefordítható true vagy false értékekre. https://developer.mozilla.org/en-US/docs/Glossary/Truthy
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

isPositive(3);
isPositive(-3);

const isTruthly = v => {
    if (v) {
        console.log('Thrutly')
    } else {
        console.log('Falsy')
    }
};

isTruthly(0);
isTruthly([]);
isTruthly(42);
isTruthly('cica');
isTruthly(-3.14);

//ne nagyon használjuk, mert a kiértékelés nem magától érthetődő.

//swich case
const matToStars = n => {
    let res;
    switch (n) {
        case 1: res = '*'; break;
        case 2: res = '**'; break;
        case 3: res = '***'; break;
        case 4: res = '****'; break;
        case 5: res = '*****'; break;
        default: res = '-'
    }
    return res;
}

console.log(matToStars(1));
console.log(matToStars(2));
console.log(matToStars(3));
console.log(matToStars(4));
console.log(matToStars(5));
console.log(matToStars(-5));

//a break azért kell mert a ciklus nem szakítja meg a futást, hanem tovább megy akkor is ha egyezést talált a case-ben.

//hibakezelés try catch blokk
const throwIsFalsy = v => {
    if (!v) {
        throw new Error('Falsy value.'); // kivétel létrehozása

    }
};

try {
    throwIsFalsy('Thruty');
    console.log('Success');
} catch (err) {
    console.error('Caught error.', err);
}

try {
    throwIsFalsy(false);
    console.log('Success2');//hiba esetén nem fut le 
} catch (err) {
    console.error('Caught error2.', err);
}

//for ciklus
//       1       2     3
for (let i = 0; i<=4; i++) {
    console.log('For loop :',i + 1);
} 

//1 - ciklusváltozó deklarálás
//2 - kilépési feltétel
//3 - növekmény megadása

//while
let i = 0;
while (i<=4) { // itt csak a kilépési feltételt kell definiálni.
    console.log('While loop' ,i + 1);
    i++; // erre figyelni, mert ha lehagyjuk végetlen ciklusba kerülünk.
}

//operátorok
//aritmetikai operátorok

let x = 5;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

x = x + y;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;

x = x + 1
x ++;

//logikai operátorok
console.log(!true); //tagadás negálás
console.log(!{});
console.log(true && true); //AND
console.log('cat' && 'dog'); //AND 
console.log(true && 'dog' && 'cat'); //AND ilyen esetekben nem true lesz az érték, hanem az utolsó operátor értékét kapja meg.
console.log(false && 'dog'); //AND
console.log('dog2' && false); //AND

console.log(false || true); //OR
console.log('cat' || 'dog'); //OR 
console.log(true || 'dog' || 'cat'); //OR ilyen esetekben nem true lesz az érték, hanem az utolsó operátor értékét kapja meg.
console.log(false || 'dog'); //OR
console.log('dog2' || false);

//Sztring összefűzés
console.log('Web' + 'uni');

//?:
const isAldut = age =>{
    let res;
    res = age <= 18 ? false: true;
    return res;
}

console.log(isAldut(16));
console.log(isAldut(22));

//delete 
//kulcs törlés obj-ból
const person = {
    name: 'John',
    email: 'john@hotmail.com'
};

delete person.email;

console.log(person);

//typeof, instanceof
//tipusinformációk
//typeof - primitiv értékek tipusa

console.log(typeof 5);
console.log(typeof '5');

//referencia tipus

console.log(typeof []);
console.log(typeof {});
console.log(typeof new Date());
console.log(typeof (() => {})); // function lesz nem object 


// a typeof nem igazán hasznos itt mert minden ref érték egyben bojektum is.
console.log([] instanceof Array);
console.log([] instanceof Object);

console.log({} instanceof Array);
console.log({} instanceof Object);

console.log(new Date() instanceof Date);

//String műveletek
const ss1 = 'I am a string';
const ss2 = "So am I"; // Preferencia kérdése, hogy ' vagy " akarjuk használni
const ss3 = `Me too`;// Template string, akkor jó, ha kifejezéseket akarunk behelyettesíteni a stringbe

//string hossza
console.log('Hello Webuni'.length);

//karakter elérés poz. alapján
const s4 = 'almafa';
console.log(s4.charAt(0)); // 0-tól indul a számozás
console.log(s4.charAt(s4.length - 1)); // az utolsó karakter
console.log(s4.charAt(100)); // üres string, ha nem létező pozíciót akarunk lekérdezni

//alstring kivágás
const s5 = 'almafa';
console.log(s5.slice(0, 4)); // Első paraméter: a kivágás kezdete, második paraméter: az első elem indexe, ami már NEM lesz benne a kivágásban
console.log(s5.slice(4)); // Ha kihagyjuk a második paramétert, akkor a string végéig tart a kivágás
console.log(s5); // az eredeti string nem módosul


//tömb műveletek
const array = [];
const numArray = [1, 2, 3];
const mixedArray = [{name:'Lisa', age: 28}, false,'dog'];

console.log(numArray.length);

//elem hozzáadás a végéhez
numArray.push(4);
numArray.push(5,6,7);
console.log(numArray);

//elem hozzáadás az elejéhez
numArray.unshift(0);
console.log(numArray);

//elem elérés
const array1 = [3, 4, 5];
console.log(array1[0]); // 3
console.log(array1[array1.length - 1]); // az utolsó elem, 5
console.log(array1[10]); // nincs 11 elem a tömbben, így undefined

//elem törlés
const array2 = [3, 4, 5];
array2.splice(1, 1); // Első paraméter: a törlendő elem(ek) index-e, második paraméter: hány elemet akarunk törölni
console.log(array2);

//iterálás a tömbön
/*
Tömbökön a for és while ciklusok segítségével is végigiterálhatunk, azonban a legújabb és
legegyszerűbb megoldás, ha a forEach metódust használjuk, amely paraméterül vár egy
függvényt, amelyet a tömb minden elemére meghív:
*/
const array3 = ['apple', 'orange', 'melon', 'banana'];

array3.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});