class Carrera {
    circuito = new Circuitos('Cheste', 3, ['r', 'c', 'r', 'c', 'c', 'r', 'c', 'r', 'c', 'c', 'r', 'c', 'r', 'r','r'])
    coches = [new RayoMcQueen(215, 4, 2, true), new FrancescoVirgolini(230, 3, 1, true)];
    resultados = [];
    instante = 0;
    corriendo = true;

    start() {
        while (this.corriendo) {
            this.instante++;
            console.log(this.resultados.length)
            this.coches.map((Coche) => {
                if (Coche.ingame == true) {
                    if (Coche.vueltas <= this.circuito.vueltas) {
                        console.log(`${Coche.name}->${Coche.dr}; v:${Coche.velocidad}`)
                        if (Coche.dr < this.circuito.distancia) {
                            this.juego(Coche, this.circuito.pista[parseInt(Coche.dr / 100)]);
                        } else {
                            Coche.vueltas += 1;
                            Coche.dr -= this.circuito.distancia;
                        }
                    } else {
                        Coche.ingame = false;
                        this.resultados.push({ instante: this.instante, Coche })
                        if (this.resultados.length == this.coches.length) {
                            this.corriendo = false;
                        }
                    }
                }
            })
        }
        console.log(this.resultados)
    }

    juego(Coche, posicion) {
        switch (posicion) {
            case 'r':
                Coche.acelerar();

                break;
            case 'c':
                Coche.frenar();
                break;
        }
    }
}