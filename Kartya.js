export default class Kartya {
    #kartya = {};
  
    constructor(kartya, szuloElem) {

      this.#kartya = kartya;
      this.szuloElem = szuloElem;
      this.kartyaLetrehoz();
      this.gombElem = $(".kivalaszt:last");
      this.#esemenyKezelo();
    }
  
    #esemenyKezelo() {
        // Use a more specific selector and read data from `data-` attributes
        this.szuloElem.find(".kartyakep").off("click").on("click", (event) => {
            const imageId = $(event.currentTarget).attr("data-id"); // Get the data-id
            const clickedKartya = this.#getKartyaById(imageId); // Get the kartya object
            
            console.log(clickedKartya, "teszt");
            const e = new CustomEvent("kivalaszt", { detail: clickedKartya });
            window.dispatchEvent(e);
            console.log(clickedKartya.cime);
        });
    }

    #getKartyaById(id) {
        return this.szuloElem.find(kartya => kartya.cime === id);
    }


    kartyaLetrehoz() {

      this.szuloElem.append(`
                      <div class="kartyasingle"> 
                          <div class="card-body">
                              <h3 class="card-title"> ${this.#kartya.cime}</h3> 
                              <div class="kartyakep-tarto"><img class="kartyakep"  data-id="${this.#kartya.cime}" id="${this.#kartya.cime}" src="${this.#kartya.eleresi}" alt="${this.#kartya.cime}"
                              </div>
                      </div>
                      </div>`);
    
  
      }
  
  }
  