// 1. adattabla, kep eleresi ut cime
//2. kartya osztaly amelyik egy kepert felel
//3. kartyak osztaly letrehozasa, sok kepet tud megjeleniteni
// 4. ha rakattintunk a kiskepre, akkor az a kep jelenjen meg felul nagyba
// 5. nyilakkal leptetni lehessen
import { kepLista } from "./adatok.js";
import GaleriaModell from "./modell/GaleriModell.js";
import Kartya from "/view/Kartya.js";
import Kartyak from "/view/Kartyak.js";
let kivalasztottItem = null;
import GaleriaController from "./controller/GaleriaController.js";

const galeriaController = new GaleriaController(); 


eventListenerek();
//GaleriaModell.kiemeltKepFrissit();
//GaleriaModell.kiemeltKepFrissitKeppel();

function eventListenerek() {
    // Attach event listeners using the instantiated controller's buttons
    galeriaController.jobbGomb.on("click", () => galeriaController.GaleriaModell1.jobbraLep());
    galeriaController.balGomb.on("click", () => galeriaController.GaleriaModell1.balraLep());
  }

// function kovetkezoKep() {
//   if (jelenlegiIndex < kepLista.length - 1) {
//     jelenlegiIndex++;
//   }
//   kiemeltKepFrissit();
// }

// function kovetkezoKep() {
//     if (jelenlegiIndex === kepLista.length - 1) {
//         jelenlegiIndex = 0;
//     } else {
//         jelenlegiIndex++
//     }
//     kiemeltKepFrissit();
// }

// function elozoKep() {
//     if (jelenlegiIndex > 0) {
//         jelenlegiIndex--;
//         }
//         kiemeltKepFrissit();
// }

// function elozoKep() {
//     if (jelenlegiIndex === 0) {
//         jelenlegiIndex = kepLista.length -1;
//     } else {
//         jelenlegiIndex--;
//     }
//     kiemeltKepFrissit();
// }

// function kiemeltKepFrissit() {
//     const main = $('.imagelarge')
//     const img = $('<img>').attr('src',  kepLista[jelenlegiIndex].eleresi).addClass('nagy-kep');
//     main.empty();
//     main.append(img);
// }


// function kiemeltKepFrissitKeppel() {
//     const kartyak = $('.kartyakep')
//     kartyak.each(function (index) {
//         $(this).on('click', () => {
//             jelenlegiIndex =  index;
//             GaleriaModell1.kiemeltKepFrissit();
//         })
//     })
// }

// $(window).on("kivalaszt", (event) => {
//   //console.log(event.detail); // Print the selected card's data
//   let AktObj = GaleriaModell1.setAktElem(event.detail.id)
//   AktObj = event.detail; // Set the selected item
//   //console.log(kivalasztottItem); // Print the selected item
// });

// kepLista.forEach((kartya) => {
//     new Kartya(kartya, divElem);
// })
