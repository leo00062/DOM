let lien = document.createElement("a");
lien.setAttribute("href", "#");
// lien.setAttribute("target", "_blank");
// lien.innerHTML = "<Visiter mon site>"; // permet de rajouter de la saisie HTML A NE PAS FAIRE // DONTDOTHIS
lien.textContent = "Visiter mon site "; // Permets d'ajouter du text ! //SAUVEGARDE
// lien.style.textDecoration = "none";
// lien.style.backgroundColor = "blue";
// lien.style.borderRadius = "20px";
// lien.style.color = "white";

let divRoot = document.querySelector("#root");

// lien.addEventListener("mouseover", () => {
//   lien.classList.toggle("perso");
// });

lien.addEventListener("mouseenter", () => {
  lien.classList.add("perso");
});

lien.addEventListener("mouseout", () => {
  lien.classList.remove("perso");
});

root.append(lien);
// lien.remove(lien); // Pour enlever  nom de ce que l'on veut enlever . remove //SAUVEGARDE:

// console.log(lien);
let scrollPos = 0; //SAUVEGARDE
let show = document.querySelector("#show");

window.document.addEventListener("scroll", () => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    lien.style.transform = "rotate(-45deg)";
    show.textContent = `Vous scroller vers le haut vous etes a ${scrollY} px du haut `;
    console.log(scrollY);
  } else if (scrollY > 100) {
    show.textContent = `Vous etes allez trop loin !`;
  } else {
    lien.style.transform = "rotate(90deg)";
    show.textContent = `Vous scroller vers le bas vous etes a  ${scrollY} px du bas `;
    console.log(scrollY);
  }

  scrollPos = document.body.getBoundingClientRect().top;
});

lien.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
