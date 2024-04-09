Console.log("Hola, mundo");
Console.log("Hola, desarrolladores y psicólogos");
console.log("Este es mi mensaje");

// Conceptos esenciales de JAVASCRIPT: 
//Tipos de variables
//1. Manejo del DOM
//2. Condicionales
//3. Ciclos
// LAS VARIABLES EN JS -> Contenedores de información

// Hay 3 tipos de variables en JS
// VAR -> No se emplea en la actualidad, está en desuso -> También cambia en el tiempo
// LET -> Variable que puede cambiar en el tiempo
// CONST -> Variable que no puede cambiar en el tiempo

// Tipos de datos / información que podemos almacenar:
// El símbolo (=) en JS no es comparativo, dado que permite asignar valores

// Numéricos EJ: 
let numero = 7;

// Cadena de caracteres o texto (string en programación) EJ:
// Recordatorio: El texto SIEMPRE debe estar dentro de comillas 
let texto = "hola, mundo"

//Booleanos -> Dato que puede ser o verdadero o falso EJ:
let esVerdadero = true; 
let esFalso = false; 

// Arreglos (arrays en programación) -> Facilitan el almacenamiento de varios datos al mismo tiempo dentro una misma variable. Por lo tanto debemos recordar que deben pertener a una misma clase o tipo. EJ:
let arregloNombres = ["Luisa", "Emmanuel", "Paula", "Lucila"];
let arregloNumeros = [1, 3, 5, 8, 20];

// Objetos - Representación de elementos de la vida real pero en el propio código. Cuenta con atributos o características y métodos o acciones que pueden llevar a cabo
// Llaves {} para declarar objetos; corchetes [] para contener arreglos y paréntesis () para ejecutar acciones o invocar funciones 

const celular = {
    color: "blanco",
    modelo: "Galaxy A 7",
    ancho: 350,
    largo: 800,
    marca: "Samsung",
    enviarMensajes: function(){
        //Cuando hay llaves al lado de paréntesis se establece la acción a realizar
        console.log("Mensaje enviado");
    },

    sumar: function(){
        console.log(5+4);
    }
};

// Las funciones son las acciones que realiza el objeto; pueden o no recibir datos de entrada, pero es seguro que tendrá un procesamiento de datos para devolver un resultado concreto