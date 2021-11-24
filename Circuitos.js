class Circuitos{
    pista=[];
    distancia=0;
    constructor(nombre,vueltas,pista){
        this.nombre=nombre;
        this.vueltas=vueltas;
        this.pista=pista;
        this.distancia=pista.length*100;
    }
}