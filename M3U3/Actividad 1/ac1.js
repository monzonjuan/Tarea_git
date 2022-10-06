console.log("conectado123")
const distancia = prompt("Ingrese la distancia a recorrer en metros");

if (distancia<1000){
    console.log("El transporte recomendando es ir a pie")
}
if(distancia>1000 && distancia<10000){
    console.log("El transporte recomendando es la bicicleta")
}
if(distancia>10000 && distancia<30000){
    console.log("El transporte recomendando es el colectivo")
}
if(distancia>30000 && distancia<100000){
    console.log("El transporte recomendando es el auto")
}
if(distancia>100000){
    console.log("El transporte recomendando es el avion")
}
