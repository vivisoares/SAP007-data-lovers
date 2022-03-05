import data from "./data/rickandmorty/rickandmorty.js";
import filter from './data.js';



// EXIBIR OS CARDS
const printingAllCards = (characters) => {
  let showingCards = ""; // Let que armazenará cada elemento da array que corresponder com a condição
  for (let character of characters) { // Character é a variavel índice usada para iniciar o looping
    showingCards += character = `<div class="cards">
    <img src="${character.image}" class="image-card">
    <p class="p-name-card">${character.name}</p>
    <p class="p-card">Status: ${character.status}</p>
    <p class="p-card">Especie: ${character.species}</p>
    <p class="p-card">Gênero: ${character.gender}</p>
    <p class="p-card">Origen: ${character.origin.name}</p>
    </div>`;
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

    const results = filter(data.results, event.target.value);
    //console.log(results);
    printingAllCards(results); // Armazenou o item.species do rickandmorty.js
  })
    printingAllCards(data.results);



