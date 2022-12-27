console.log('Hello');

document.addEventListener('DOMContentLoaded',() => {
    //email kitöltése
    const email = localStorage.getItem('email'); 
    
    if (email){ 
        document.getElementById('email').setAttribute('value', email); 
    }
    
    let visitNum = localStorage.getItem('Visit number');
    
    if (visitNum){
        localStorage.setItem('Visit number', ++visitNum);
        document.getElementById('visitnum').value = `You have been visit us ${visitNum} times.`;
    } else {
        visitNum = 1;
        document.getElementById('visitnum').value = `You visit us first time.`;
        localStorage.setItem('Visit number',visitNum);        
    }
    
    
    document.getElementById('submit').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        
        console.log(email);
        console.log(document.querySelector('#feedback').value);
        localStorage.setItem('email',email); 
        document.getElementById('feedback').value = '';
    });

    document.getElementById('magicnumber').addEventListener('change',(changeEvent) => {
        const magicNumber = document.getElementById('magicnumber').value;
        //console.log(document.getElementById('magicnumber').value);
        //document.getElementById('magiclist').innerHTML += '<li>Item1</li>';
        for (let i = 1; i<=magicNumber; i++) {
            document.getElementById('magiclist').innerHTML += `<li>💗</li>`;
            console.log('For loop :',i + 1);
        }
    })
})
