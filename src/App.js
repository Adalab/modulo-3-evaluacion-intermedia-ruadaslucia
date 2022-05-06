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

  useEffect(() => {
    getApiFetch().then((allCharacters) => {
      setAllCharacters(allCharacters);
    });
  }, []);
  useEffect(() => {
    createTrCharacters([...allCharacters]);
  }, [allCharacters]);

  useEffect(() => {
    filterCombined();
  }, [filterQuote, filterCharacter]);

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

  const filterCombined = () => {
    let filteredRows = allCharacters.filter((character) =>
      character.quote.toLowerCase().includes(filterQuote.toLowerCase())
    );

    if (filterCharacter !== 'all') {
      filteredRows = filteredRows.filter(
        (character) => character.character === filterCharacter
      );
    }

    createTrCharacters([...filteredRows]);
  };

  function addCharacter(event) {
    console.log(event);
    const character = {
      quote: event.target.form.elements.quote.value,
      character: event.target.form.elements.character.value,
    };
    saveAllCharacters([...allCharacters, character]);
    event.target.form.elements.quote.value = '';
    event.target.form.elements.character.value = '';
  }

  function setCharacterFilterTerm(characterFilterTerm) {
    setFilterCharacter(characterFilterTerm);
  }
  function setQuoteFilterTerm(quoteFilterTerm) {
    console.log(quoteFilterTerm);
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
