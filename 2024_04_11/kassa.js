class Kassa {
    
    #geldlade

    constructor() {
        this.#geldlade = 1000;
    }

    scannen(artikel) {

        console.log(`Gescannter Artikel: ${artikel.name} -> Preis: ${artikel.preis} €`);
        
        return artikel.preis;
    }

    bezahlen(betrag, preis) {

        if (betrag < preis) {
            throw new Error('nicht ausreichend Geld!');
        }

        else { 
            this.#geldlade = this.#geldlade + preis;
            const rueckgeld = betrag - preis;
            console.log(`Bezahlt: ${preis.toFixed(2)} € -> Ihr Rückgeld beträgt: ${rueckgeld.toFixed(2)} €`);
            return rueckgeld;
        }
    }

    toString() {
        return `Noch ${(this.#geldlade - 10).toFixed(2)} € in Kassa vorhanden.`;
    }
    
}

class Artikel {
    constructor(name, preis) {
      this.name = name;
      this.preis = preis;
    }
  }


const artikel = {'name': 'Brot', 'preis': 1.89};


const kassa = new Kassa();

const preis = kassa.scannen(artikel);

const rueckgeld = kassa.bezahlen(2.50, preis);

console.log(kassa.toString());