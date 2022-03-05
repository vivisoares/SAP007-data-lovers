// export const filter = (characters, status) => {
//   const results = characters.filter((item) => {

//     if (condition) { //AQUI ENTRA A CONDIÇÃO DE IF
//       return item.characteristics === status; //Aqui esta puxando dados de Specie de cada personagem
//     } else {
//       return item.status === status; //Aqui esta puxando dados de Status de cada personagem
//     }


//   })
//   console.log(results);
//   return results
// }








// //FILTRAGEM POR ESPECIE

// export const filter = (characters, characteristics) => {
//   const results = characters.filter((item) => {
//     return item.species === characteristics;
//     })
//     return results
//   }

// // export default filter








export const filter = (characters, characteristics) => {
  const results = characters.filter((item) => {
    if (characteristics === item.species) {
    return item.species === characteristics;
    }
    return item.status === characteristics;
    })
    return results
  }


export default filter




// export const filter = (characters, characteristics) => {
//   const results = characters.filter((item) => {
//     return item.status === characteristics;
//     })
//     return results
//   }
