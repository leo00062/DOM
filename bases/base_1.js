// let myButton = document.createElement("button");
// let divRoot = document.getElementById("root");
// console.log(divRoot);
// setTimeout(() => {
//   let divRoot2 = document.querySelector("#root");
//   console.log(divRoot2);
// }, 1000);

/**
 * récupération de plusieurs Elements du DOM
 */
/**
 * Réactiver le HTML base_1
 */

let links = document.getElementsByClassName("link"); // => HTLMCollection
// console.log(links);

let link2 = document.querySelectorAll(".link"); // => NodeList
// console.log(link2);

let link3 = document.getElementById("link"); // Renvoie Element
// console.log(link3);

let link4 = document.querySelector("linked"); //  Renvoie Element
// console.log(link4);

let link5 = document.getElementsByClassName(".linked"); // Renvoi HTMLCollection
// console.log(link5);

let link6 = document.querySelectorAll(".link"); // Retourne une Nodelist
// console.log(link6);

let link7 = document.querySelector(".link:nth-Child(2)"); // Récupère le deuxiemme enfant uniquement
console.log(link7);
