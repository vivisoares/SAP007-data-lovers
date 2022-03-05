
    const filter = (characters, specie ) => {
    const speciesCards = (characters.filter((item) => {
           return item.species === specie;
        }));
           return speciesCards;
}
    // const filter = (characters, status ) => { 
    // const statusCards = (characters.filter((item) => {
    //     return item.status === status;
    //  }));
    //     return statusCards;
    // }

export default filter