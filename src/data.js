//FILTRAGEM

export const filter = (characters, characteristics) => {
  const results = characters.filter((item) => {
    if (characteristics === item.species) {
    return item.species === characteristics;

    } else (characteristics === item.status)
      return item.status === characteristics
    })
    return results
  };

//ORDENAÇÃO

export const ordination = (characters, order) => {
  const listCharacters = [...characters]
  if(order === "AZ") {
    return listCharacters.sort((a, b) => (a.name > b.name ? 1 : -1))
} else {
    return listCharacters.sort((a, b) => (a.name > b.name ? -1 : 1))
  }
}


