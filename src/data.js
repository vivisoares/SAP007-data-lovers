// //FUNÇÃO DE FILTRAGEM FUNCIONANDO - EXPLICAÇÃO

// export const filter = (characters, characteristics) => { //Filter é a função com 2 parametros (Personagens e Caracteristicas)
//   const results = characters.filter((item) => { // Results é a Nova Array onde será armazenado os valores filtrados dos Personagens
//     if (characteristics === item.species) { // Se as caracteristicas selecionadas pelo seletor for a de Specie
//     return item.species === characteristics; //Argmento de filtragem inicial será item.species
//     }
//     return item.status === characteristics; // Senão o argumento de filtragem inicial será item.status
//     })
//     return results //Retorno dos valores da Nova Array devidamente filtrados
//   }


// export default filter





export const filter = (characters, characteristics) => {
  const results = characters.filter((item) => {
    if (characteristics === item.species) {
    return item.species === characteristics;

    } else if (characteristics === item.status){
      return item.status === characteristics

    } else if (characteristics === item.name){
      return results
    }
    })
    return results
  };





export const ordination = (characters, order) => {
  if(order === "AZ") {
    return characters.sort((a, b) => (a.name > b.name ? 1 : -1))
} else {
    return characters.sort((a, b) => (a.name > b.name ? -1 : 1))
  }
}



