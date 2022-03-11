
export const filter = (characters, characteristics) => {
  // const resultTotalCharacters = results 
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

export const average = (total, portion) => {
  const averageCalculation = Math.round((portion * 100 / total))
  return averageCalculation
}
