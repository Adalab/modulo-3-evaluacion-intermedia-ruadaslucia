//import FilterByQuote from './components/FilterByQuote';
//import FilterByCharacter from './components/FilterByCharacter';
import { useState } from 'react';
import FilterByQuote from './FilterByQuote';
import FilterByCharacter from './FilterByCharacter';

function Filter(props) {
  const handleQuoteFilter = (event) => {
    let filterTerm = event.target.value;
    //setInputQuote(filterTerm);
  };

  const handleCharacterFilter = (event) => {
    let filterTerm = event.target.value;
    props.manolito(filterTerm);
  };
  return (
    <section>
      <FilterByQuote manolito={handleQuoteFilter} />
      <FilterByCharacter pepito={handleCharacterFilter} />
    </section>
  );
}
export default Filter;
