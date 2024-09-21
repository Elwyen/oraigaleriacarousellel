
export default class GaleriaModell{
    #lista=[]
    #aktElem;
    
    constructor(lista){
        this.#lista=lista
        this.#aktElem=0

    }

    setAktElem(id){
        this.#aktElem=id;
        return this.#lista[this.#aktElem]
    }

    balraLep(index){
        if (this.#aktElem === 0) {
            this.#aktElem = this.#lista.length -1;
        } else {
            this.#aktElem--;
        }
        this.kiemeltKepFrissit();
        return this.#lista[this.#aktElem]
    }
    
    jobbraLep(index){
        if (this.#aktElem === this.#lista.length - 1) {
            this.#aktElem = 0;
        } else {
            this.#aktElem++
        }
        this.kiemeltKepFrissit();
        return this.#lista[this.#aktElem]
    }


    //kulon classba tenni: JatekTer.js
    kiemeltKepFrissit() {
        const main = $('.imagelarge')
        const img = $('<img>').attr('src',  this.#lista[this.#aktElem].eleresi).addClass('nagy-kep');
        main.empty();
        main.append(img);
    }

    kiemeltKepFrissitKeppel() {
        const kartyak = $('.kartyakep');
        const self = this;
    
        kartyak.each(function (index) {
            $(this).on('click', function () {
                self.#aktElem = index;
                self.kiemeltKepFrissit();
            });
        });
    }
    
}