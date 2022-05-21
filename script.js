alert("Haremos la sumatoria de una serie de numeros ingresados por teclado.")
alert("El ciclo se corta con cualquier dato ingresado que NO sea un numero")

let numberUser = parseInt(prompt("Ingrese un numero: "))
let counter = 0; 

while(Number.isInteger(numberUser)){
    counter += numberUser
    numberUser = parseInt(prompt("Ingrese nuevamente un numero: "))
}

alert("La sumatoria de los numeros ingresados es: " + counter)


