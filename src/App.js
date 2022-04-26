import { useEffect } from 'react';
import './App.css';

function App() {
  //useStates
  const [allCharacters, setAllCharacters] = useState([]);
  const [trCharacters, setTrCharacters] = useState([]);
  const [inputQuote, setinputQuote] = useState('');
  const [inputCharacter, setInputCharacter] = useState('all');

  //funciones
  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const mappedCharacters = data.map((showCharacter) => {
          const mappedCharacter = {
            quote: showCharacter.quote,
            character: showCharacter.character,
          };
          return mappedCharacter;
        });
        saveAllCharacters([...mappedCharacters]);
      });
  }, []);
  function saveAllCharacters(characters) {}
  useEffect(() => {
    createTrCharacters([...allCharacters]);
  }, [allCharacters]);

  useEffect(() => {
    filterCharacters();
  }, [inputQuote, inputCharacter]);

  const createTrCharacters = (characters) => {
    const rowCharacters = characters.map((character) => {
      const rowCharacter = (
        <tr key={showCharacter.id}>
          <td>{showCharacter.quote}</td>
          <td>{showCharacter.character}</td>
        </tr>
      );
      return rowCharacter;
    });
    setTrCharacters([...rowCharacters]);
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
      </div>
      <div>
        <p>Add a new quote</p>
        <form>
          <input type="text" name="quote" />
          <input type="text" name="character" />
          <button>Add a new quote</button>
          {/*ojo añadir event.prevent default en  handler de formulario*/}
          {/*funcion manejadora del listener delboton añadir*/}
        </form>
      </div>
    </div>
  );
}

export default App;
