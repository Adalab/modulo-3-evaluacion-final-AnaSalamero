const getApiData = () => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((data) => {
      const dataUser = data.results.map((character) => {
        return {
          name: character.name,
          photo: character.image,
          class: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
          id: character.id,
        };
      });
      return dataUser;
    });
};

export default getApiData;
