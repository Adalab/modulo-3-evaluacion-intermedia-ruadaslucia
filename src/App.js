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
  const [inputQuote, setInputQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  //al cargarse la pagina devolvemos la promesa del fetch y la seteamos
  useEffect(() => {
    getApiFetch().then((allCharacters) => {
      setAllCharacters(allCharacters);
    });
  }, []);

  //al cargarse la pagina ejecutamos la func. q crea la tabla que contiene todas las frases y sus personajes y se ejecuta siempre que cambia el estado allCharacters.
  useEffect(() => {
    createTrCharacters([...allCharacters]);
  }, [allCharacters]);

  //creamos la tabla con sus cabeceras
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

  const filterCharacters = () => {
    let filteredCharacters = allCharacters.filter((character) =>
      character.quote.toLowerCase().includes(inputQuote.toLowerCase())
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
  function setCharcterFilterTerm(characterFilterTerm) {
    setFilterCharacter(characterFilterTerm);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Filter manolito={setCharcterFilterTerm} />
        <TableOfContent trCharacters={trCharacters} />
        <AddNewForm addCharacter={addCharacter} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
