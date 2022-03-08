import data from "./data/rickandmorty/rickandmorty.js";
import {filter, ordination} from './data.js'; //ADD AS FUNÇÕES DO DATA




// EXIBIR OS CARDS
const printingAllCards = (characters) => {
  let showingCards = ""; // Let que armazenará cada elemento da array que corresponder com a condição
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

  document.getElementById("cardsBoard").innerHTML = showingCards; // Imprimir no HTML
}


// FILTRAGEM POR ESPÉCIES
const speciesFilter = document.getElementById("species"); // Const que armazena o ID do select específico
speciesFilter.addEventListener("change", function (event){// Ao ouvir o evento e armazenar no ID

    const speciesCards = filter(data.results, event.target.value); // Const que armazena e busca o resultado da const filter
    printingAllCards(speciesCards); // Armazenou o item.species do rickandmorty.js
})
  printingAllCards(data.results);


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


