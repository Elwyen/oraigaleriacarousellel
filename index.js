// 1. adattabla, kep eleresi ut cime
//2. kartya osztaly amelyik egy kepert felel
//3. kartyak osztaly letrehozasa, sok kepet tud megjeleniteni
// 4. ha rakattintunk a kiskepre, akkor az a kep jelenjen meg felul nagyba
// 5. nyilakkal leptetni lehessen
import { kepLista } from "./adatok.js";
import Kartya from "./Kartya.js";
import Kartyak from "./Kartyak.js";
let kivalasztottItem = null;


const divElem = $(".kartyak");
const kivElem = $(".kivalasztott");
const jobbGomb =  $(".kovetkezogomb");
const balGomb = $(".elozogomb");
let jelenlegiIndex = 0;


new Kartyak(kepLista, divElem);

eventListenerek();
kiemeltKepFrissit();
kiemeltKepFrissitKeppel();

function eventListenerek() {
  jobbGomb.on("click", () => kovetkezoKep());
  balGomb.on("click", () => elozoKep());
}

// function kovetkezoKep() {
//   if (jelenlegiIndex < kepLista.length - 1) {
//     jelenlegiIndex++;
//   }
//   kiemeltKepFrissit();
// }

function kovetkezoKep() {
    if (jelenlegiIndex === kepLista.length - 1) {
        jelenlegiIndex = 0;
    } else {
        jelenlegiIndex++
    }
    kiemeltKepFrissit();
}

// function elozoKep() {
//     if (jelenlegiIndex > 0) {
//         jelenlegiIndex--;
//         }
//         kiemeltKepFrissit();
// }

function elozoKep() {
    if (jelenlegiIndex === 0) {
        jelenlegiIndex = kepLista.length -1;
    } else {
        jelenlegiIndex--;
    }
    kiemeltKepFrissit();
}

function kiemeltKepFrissit() {
    const main = $('.imagelarge')
    const img = $('<img>').attr('src',  kepLista[jelenlegiIndex].eleresi).addClass('nagy-kep');
    main.empty();
    main.append(img);
}


function kiemeltKepFrissitKeppel() {
    const kartyak = $('.kartyakep')
    kartyak.each(function (index) {
        $(this).on('click', () => {
            jelenlegiIndex =  index;
            kiemeltKepFrissit();
        })
    })
}

$(window).on("kivalaszt", (event) => {
  //console.log(event.detail); // Print the selected card's data
  kivalasztottItem = event.detail; // Set the selected item
  console.log(kivalasztottItem); // Print the selected item
});

// kepLista.forEach((kartya) => {
//     new Kartya(kartya, divElem);
// })
