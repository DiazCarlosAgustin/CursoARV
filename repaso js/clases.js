class auto{
    constructor (modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad +=1;
    }

    reducirVelocidad(){
        this.velocidad -=1;
    }
}
class autobus extends auto{
    constructor (modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altula = 12;
    }
    mostrarAltura(){
        return "la aultura es de: " + this.altula;
    }
}

var bus = new autobus("pegasus", 220,1223);

var coche = new auto("BMW",200,2019);
var coche2 = new auto("audi",300,2019);
var coche3= new auto("mercedes",240,2019);

console.log(bus.velocidad +  " " + bus.mostrarAltura());