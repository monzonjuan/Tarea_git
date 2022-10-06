console.log("conectado")
const numeros = [15,100,300,15000,123,42332,1555,23,5553,888]


let mayor = 0;

for (let i=0; i<numeros.length; i++){
    
    if (numeros[i] > mayor){
        mayor = numeros[i];
    }

}
console.log ("El numero mayor del array es "+mayor)