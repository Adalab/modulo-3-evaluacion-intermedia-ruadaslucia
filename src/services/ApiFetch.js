function getApiFetch() {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
  )
    .then((response) => response.json())
    .then((allCharacters) => {
      return allCharacters.map((character) => ({
        quote: character.quote,
        character: character.character,
      }));
    });
}
export default getApiFetch;

//este servicio solo tiene que devolver los datos de la api
