console.log('Hello');
//webAPI
//A beviteli mezőkben lévő adatok kiolvasását és elküldését a backend felé kell egy eseménykezelő API val megvalósítani.
//Csak a kiolvasás lesz itt megvalósítva, ill egy kényelmi funkció lesz belerakva, ami jegyzi a user email-t.

//1. Eseménykezelő a send gombra
//Erre a DOM (Document Object Modell) API-t fogjuk használni. Ez úgy működik, hogy a HTML beolvasásakor egy DOM fát készit a böngésző
//ami megegyezik a HTML dokumentum fa struktúrával. Ezzel mi interakciót tudunk kezdeményezni.
//Pl.: eseménykezelő regisztrálás, DOM fában lévő elemek lekérése, módosítása törlése.
//A HTML elemhez id-kell megadni, ez a gombunk esetén a submit

////       |          1            |             2         |          3          
//document.getElementById('submit').addEventListener('click',e => console.log(e));
//1 - A HTML elem definiálása
//2 - Az esemény neve, amelyre fel akarunk iratkozni
//3 - Maga az esemény

//A 13. sor magában hibára fog futni, mert a HTML-ben lévő .js script akkor fog lefutni amikor a DOM fa nincs kész, mert ezt rögtön futtatja is. Ez a teljes HTML 
//betöltése után érhető el. ezért az eseménykezelőt akkor kell beregelni, amikor a DOM fa készen van:
document.addEventListener('DOMContentLoaded',() => {
    //email kitöltése
    const email = localStorage.getItem('email'); //beolvas
    if (email){ //ellenőrzi, hogy nem üres a beolv str
        document.getElementById('email').setAttribute('value', email); //email beállítás. A setAttribute-nak a meg kell adni h melyik kulcsot akarjuk mivel beállítani.
    }
    document.getElementById('submit').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        console.log(email);
        console.log(document.querySelector('#feedback').value);
        localStorage.setItem('email',email); //A setItem kulcs érték párokat fogad el.
    });
})

//A DOMContentLoaded egy eseményvév, ami akkor hívódik, ha az adott esemény lefut, így lehet akkor regisztrálni a click eseményre ha kész a DOM fa.

//Adatok kiolvasása az inputokból. Az addEventListener-be beágyazott 13 sort módosítjuk. A getElementById-vel érhető el az elem.
//Lehet a querySelectort is erre használni, itt tetszőleges CSS selectort lehet megadni, de a név elé kell #
// -> console.log(document.querySelector('#feedback').value);

//Email mentése a böngészőbe, ide a storage API kell. A DevTools-ban az Application Local Storage-ben lehet ellenőrizni a mentést.
//Innen nem tudnak kiolvasni más appok által lementett adatot.
