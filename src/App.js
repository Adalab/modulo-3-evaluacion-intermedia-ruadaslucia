import './App.css';
import Header from './components/Header';
import FilterForm from './components/FilterForm';
import TableOfContent from './components/TableOfContent';
import AddNewForm from './components/AddNewForm';
import { useEffect } from 'react';
import { useState } from 'react';
import getApiFetch from './services/ApiFetch';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [trCharacters, setTrCharacters] = useState([]);
  const [inputQuote, setInputQuote] = useState('');
  const [inputCharacter, setInputCharacter] = useState('all');

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

  const handleQuoteFilter = (event) => {
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
      <Header />
      <FilterForm />
      <TableOfContent trCharacters />
      <AddNewForm {addCharacter} />
    </div>
  );
}

export default App;
