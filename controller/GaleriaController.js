import { kepLista } from "../adatok.js";
import GaleriaModell from "../modell/GaleriModell.js";
import Kartya from "/view/Kartya.js";
import Kartyak from "../view/Kartyak.js";


export default class GaleriaController {
  constructor() {
    // peldanyositja a view-kat
    // peldanyositja a modellt
    // feliratkozik az esemenyekre

    this.divElem = $(".kartyak");
    this.kivElem = $(".kivalasztott");
    this.jobbGomb = $(".kovetkezogomb");
    this.balGomb = $(".elozogomb");
    let jelenlegiIndex = 0;

    this.GaleriaModell1 = new GaleriaModell(kepLista);
    //let AktObj = this.GaleriaModell1.setAktElem(event.detail.id)

    new Kartyak(kepLista, this.divElem);
    this.GaleriaModell1.kiemeltKepFrissit();
    this.GaleriaModell1.kiemeltKepFrissitKeppel();
  }
}
