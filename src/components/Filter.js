import '../styles/filters.scss';
import FilterByQuote from './FilterByQuote';
import FilterByCharacter from './FilterByCharacter';

function Filter(props) {
  const handleQuoteFilter = (event) => {
    let filterTerm = event.target.value;
    props.setQuote(filterTerm);
  };

  const handleCharacterFilter = (event) => {
    let filterTerm = event.target.value;
    props.setChar(filterTerm);
  };
  return (
    <section className="twoFilters">
      <FilterByQuote setQuoteTerm={handleQuoteFilter} />
      <FilterByCharacter characterFilter={handleCharacterFilter} />
    </section>
  );
}
export default Filter;
