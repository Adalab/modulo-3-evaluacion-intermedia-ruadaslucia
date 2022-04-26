import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [trCharacters, setTrCharacters] = useState([]);
  const [inputQuote, setInputQuote] = useState('');
  const [inputCharacter, setInputCharacter] = useState('all');

  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const mappedCharacters = data.map((character) => {
          const mappedCharacter = {
            quote: character.quote,
            character: character.character,
          };
          //console.log(mappedCharacter);

          return mappedCharacter;
        });
        saveAllCharacters([...mappedCharacters]);
      });
  }, []);

  useEffect(() => {
    createTrCharacters([...allCharacters]);
  }, [allCharacters]);

  useEffect(() => {
    filterCharacters();
  }, [inputQuote, inputCharacter]);

  const saveAllCharacters = (characters) => {
    setAllCharacters([...characters]);
  };

  const createTrCharacters = (characters) => {
    const rowCharacters = characters.map((character) => {
      const rowCharacter = (
        <tr key={character.id}>
          <td>{character.quote}</td>
          <td>{character.character}</td>
        </tr>
      );
      return rowCharacter;
    });
    setTrCharacters([...rowCharacters]);
  };

  const handleQuoteFilter = (event) => {
    //console.log(event);
    let filterTerm = event.target.value;

    setInputQuote(filterTerm);
  };

  const handleCharacterFilter = (event) => {
    let filterTerm = event.target.value;
    setInputCharacter(filterTerm);
  };

  const filterCharacters = () => {
    let filteredCharacters = allCharacters.filter((character) =>
      character.quote.toLowerCase().includes(inputQuote.toLowerCase())
    );
    if (inputCharacter !== 'all') {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.character === inputCharacter
      );
    }
    createTrCharacters([...filteredCharacters]);
  };

  const addCharacter = (event) => {
    event.preventDefault();
    const character = {
      //objeto con informacion que quieres que lleve cada uno
      quote: event.target.form.elements.quote.value,
      character: event.target.form.elements.character.value,
    };
    saveAllCharacters([...allCharacters, character]);
    event.target.form.elements.quote.value = '';
    event.target.form.elements.character.value = '';
  };
  return (
    <div className="App">
      <h1>Friends quotes</h1>

      <div className="containerFilters">
        <div className="inputfilterName">
          <p>Filter by quote: </p>
          <input type="text" onChange={handleQuoteFilter} />
        </div>
        <div className="selectFilterCharacter">
          <p>Filter by character: </p>
          <select name="select" onChange={handleCharacterFilter}>
            <option value="all">All characters</option>
            <option value="Rachel">Rachel</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Ross">Ross</option>
            <option value="Chandler">Chandler</option>
          </select>
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Quote</th>
            </tr>
          </thead>
          <tbody>{trCharacters}</tbody>
        </table>
      </div>

      <div className="newCharacter">
        <h3>Add a new quote</h3>
        <form>
          <p>quote</p>
          <input type="text" name="quote" />
          <p>character</p>
          <input type="text" name="character" />
          <button onClick={addCharacter}>Add character and quote</button>
        </form>
      </div>
    </div>
  );
}

export default App;
