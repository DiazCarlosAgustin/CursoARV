// variables

var nombre = ["Agunstin","Diaz"];

// imprimo en pantalla la var
 document.write(nombre + "\n");

const datos = document.getElementById("datos");

datos.innerHTML = nombre;

var coche = {
    modelo: "mercedes clase A",
    maxima: 500,
    antiguedad: 2019
};

function escribirVeces(x){
    var cant = 0;
    for(var i = 1; i < x; i++){
        cant = cant + i;
    }
    return cant;
}
function mi_nombre(){
   return nombre.forEach((nom) =>{
       return nom
   })
}
function imprimir(){
    datos.innerHTML = mi_nombre();
    datos.innerHTML = coche.modelo;
}
imprimir()
// promesas
var saludar = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let saludo = "Hola muy buenas a todos.";

        if(saludo){
            resolve(saludo);
        }
        else{
            reject("no hay saludo disponible")
        }
    },000);
});

saludar.then(resultado =>{
    console.log(resultado);
    
}).catch(err =>{
    console.log(err);
    
})