class Coches {
    velocidad = 0;
    velmax;
    acc;
    reducirvel;
    gasofa = 0;
    dr = 0;
    vueltas = 1;

    constructor(velmax, acc, reducirvel, ingame, tanque) {
        this.velmax = velmax;
        this.acc = acc;
        this.reducirvel = reducirvel;
        this.ingame = ingame;
        this.tanque = tanque;
    }

    acelerar() {
        this.velocidad = this.velocidad + this.acc;
        this.velocidad >= this.velmax ? this.velocidad = this.velmax : this.velocidad;
        this.dr = this.dr + this.velocidad;
        this.combustion();
    }

    frenar(){
        if(this.velocidad >= 20){
            this.velocidad=this.velocidad-this.reducirvel;
            this.dr = this.dr + this.velocidad;
            this.combustion();
        }else{
            this.acelerar();
        }
    }

    combustion(){
        this.gasofa-=this.velocidad/100;
    }

    Repostaje(){
        this.fuel+=10;
        this.fuel>this.tanque ? this.gas=this.tanque : this.fuel;
    }

}