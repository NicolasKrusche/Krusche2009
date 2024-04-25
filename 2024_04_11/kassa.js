class Kassa {
    #geldlade;
    #gescannteArtikel;

    constructor(geldlade){
        this.#geldlade = geldlade;
        this.#gescannteArtikel = []
    }

    scannen(artikel) {
        this.#gescannteArtikel.push(artikel)
    }


    get betrag() {
        let betrag = 0;
        this.#gescannteArtikel.forEach(a => betrag += a.preis)
        return betrag
    }
}


class Artikel {

    constructor(name, preis){
        this.name = name;
        this.preis = preis;
    }

}


const produkt = new Artikel('Cola', 2)
const produkt2 = new Artikel('Apfel', 1)
const kassa = new Kassa()

kassa.scannen(produkt)
kassa.scannen(produkt2)

console.log(`Offen sind: ${kassa.betrag}`)