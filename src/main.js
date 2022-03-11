import data from "./data/rickandmorty/rickandmorty.js";
import {filter, ordination} from './data.js';

// EXIBIR OS CARDS
const printingAllCards = (characters) => {
  let showingCards = "";
  for (let character of characters) {
    showingCards += character = `<dl class="cards">
    <img src="${character.image}" class="image-card">
    <dt class="p-name-card">${character.name}</dt>
    <dd class="p-card">Status: ${character.status}</dd>
    <dd class="p-card">Especie: ${character.species}</dd>
    <dd class="p-card">Gênero: ${character.gender}</dd>
    <dd class="p-card">Origen: ${character.origin.name}</dd>
    </dl>`;
  }
  document.getElementById("cardsBoard").innerHTML = showingCards;
}
printingAllCards(data.results);

// FILTRAGEM POR ESPÉCIES
const speciesFilter = document.getElementById("species");
speciesFilter.addEventListener("change", function (event){

  const speciesCards = filter(data.results, event.target.value);
  printingAllCards(speciesCards);
  })

// FILTRAGEM POR STATUS
  const statusFilter = document.getElementById("status");
  statusFilter.addEventListener("change", function (event){

    const statusCards = filter(data.results, event.target.value);
    printingAllCards(statusCards);
  })


// ORDENAÇÃO
const ordinationAz = document.querySelector("#ordination");
ordinationAz.addEventListener("change", function(event){

  const characters = ordination(data.results, event.target.value);
  printingAllCards(characters);
  })


