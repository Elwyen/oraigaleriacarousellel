// 1. adattabla, kep eleresi ut cime
//2. kartya osztaly amelyik egy kepert felel 
//3. kartyak osztaly letrehozasa, sok kepet tud megjeleniteni
// 4. ha rakattintunk a kiskepre, akkor az a kep jelenjen meg felul nagyba
// 5. nyilakkal leptetni lehessen
import { kepLista } from "./adatok.js";
import Kartya from "./Kartya.js";
import Kartyak from "./Kartyak.js";
let kivalasztottItem = null;
const kivalasztottLista=[]


const divElem = $(".kartyak")
const kivElem = $(".kivalasztott")

new Kartyak(kepLista, divElem)



$(window).on("kivalaszt", (event) => {
    //console.log(event.detail); // Print the selected card's data
    kivalasztottItem = event.detail; // Set the selected item
    console.log(kivalasztottItem); // Print the selected item
});

// kepLista.forEach((kartya) => {
//     new Kartya(kartya, divElem);
// })