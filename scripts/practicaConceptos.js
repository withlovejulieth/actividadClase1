// Pasos: 1) Se debe verificar que esté conectado con .html | 2) Traer los elementos que se requieren del .html (por lo general, los que tienen identificadores)

console.log('Hola, mundo v2.0');

// Las variables siempre deben ser constantes

// Elemento No. 1
const edadInput = document.getElementById('edadInput');
console.log(edadInput);

// Elemento No. 2
// Forma A (replicando la anterior)
// const btn = document.getElementById('btn'); 
//console.log(btn);

const messageAge = document.getElementById("messageAge");
console.log(messageAge);

// Forma B (por medio de eventos)
function verificarEdad(){
    //Cada que le de clic al botón, quiero obtener el siguiente mensaje: "Hola"
    console.log('Entro a mi función verificar edad');

    let edad = edadInput.value;
    console.log(edad);

    //Uso de condicionales
    if(edad>= 18){
        console.log('Eres mayor de edad');
        messageAge.textContent = 'Eres mayor de edad';
    } else {
        console.log('Eres menor de edad');
        messageAge.textContent = 'Eres menor edad';
    }
}
