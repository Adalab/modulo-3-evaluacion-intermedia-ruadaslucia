import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Filter from './components/Filter';
import TableOfContent from './components/TableOfContent';
import AddNewForm from './components/AddNewForm';
import { useEffect } from 'react';
import { useState } from 'react';
import getApiFetch from './services/FetchService/ApiFetch';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [trCharacters, setTrCharacters] = useState([]);
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  //al cargarse la pagina devolvemos la promesa del fetch y la seteamos
  useEffect(() => {
    getApiFetch().then((allCharacters) => {
      setAllCharacters(allCharacters);
    });
  }, []);
  //creat tabla personajes
  useEffect(() => {
    createTrCharacters([...allCharacters]);
  }, [allCharacters]);

  //creamos la tabla con sus cabeceras y que se pinten en fila frase y personaje
  const createTrCharacters = (characters) => {
    const rowCharacters = characters.map((character) => {
      const rowCharacter = (
        <tr>
          <td>{character.quote}</td>
          <td>{character.character}</td>
        </tr>
      );
      return rowCharacter;
    });
    setTrCharacters([...rowCharacters]);
  };

  const saveAllCharacters = (characters) => {
    setAllCharacters([...characters]);
  };

  const filterCharacters = (allCharacters, filterQuote) => {
    let filteredCharacters = allCharacters.filter((character) =>
      character.quote.toLowerCase().includes(filterQuote.toLowerCase())
    );
    if (filterCharacter !== 'all') {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.character === filterCharacter
      );
    }
    createTrCharacters([...filteredCharacters]);
  };

  /*saveAllCharacters([...allCharacters, character])
    event.target.form.elements.quote.value = '';
    event.target.form.elements.character.value = '';
  };*/

  function addCharacter() {}

  function setCharacterFilterTerm(characterFilterTerm) {
    setFilterCharacter(characterFilterTerm);
  }
  function setQuoteFilterTerm(quoteFilterTerm) {
    setFilterQuote(quoteFilterTerm);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Filter
          setChar={setCharacterFilterTerm}
          setQuote={setQuoteFilterTerm}
        />
        <TableOfContent trCharacters={trCharacters} />
        <AddNewForm addCharacter={addCharacter} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
