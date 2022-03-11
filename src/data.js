
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



  // export const filter = (characters, species) => {
  //   const results = characters.filter((item) => {
  //     if (species === item.species) {
  //     return item.species === species;

  //     } else {species === item.name}
  //     })
  //     return results
  //   };

  //   export const filter2 = (characters, status) => {
  //     const results = characters.filter((item) => {
  //       if (status === item.status) {
  //       return item.status === status;

  //       } else {status === item.name}
  //       })
  //       return results
  //     };




// export const ordination = (characters, order) => {
//   if(order === "AZ") {
//     return characters.sort((a, b) => (a.name > b.name ? 1 : -1))
// } else {
//     return characters.sort((a, b) => (a.name > b.name ? -1 : 1))
//   }
// }



// //TESTES

// export function sum(a, b) {
//   return a + b;
// }
