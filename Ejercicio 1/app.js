
const myButton1 = document.getElementById('btn1');
myButton1.addEventListener('click', function(){
document.body.style.backgroundColor = '#7B6FF5'
document.querySelector('h1').style.color = "#F0D643"
myButton1.className = 'btn aft1';
myButton2.className = 'btn aft1';
myButton3.className = 'btn aft1';
}, false);
/* --------------- */
const myButton2 = document.getElementById('btn2');
myButton2.addEventListener('click', function(){
document.body.style.backgroundColor = '#23363D'
document.querySelector('h1').style.color = "#1D80A3"
myButton1.className = 'btn aft2';
myButton2.className = 'btn aft2';
myButton3.className = 'btn aft2';
}, false);
/* --------------- */
const myButton3 = document.getElementById('btn3');
myButton3.addEventListener('click', function(){
document.body.style.backgroundColor = '#4CB2B4'
document.querySelector('h1').style.color = "#A3511D"
myButton1.className = 'btn aft3';
myButton2.className = 'btn aft3';
myButton3.className = 'btn aft3';
}, false);

/* const arrayFrutas = ['manzanas', 'peras', 'naranjas']

function agregarElemento() {
    
   

arrayFrutas.forEach(element => {
    const lista = document.querySelector('#lista');
    const li = document.createElement('li');
    li.innerText = element;

    lista.appendChild(li);
    
});
    
}

agregarElemento();
 */