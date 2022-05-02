function FilterByQuote(props) {
  function handleQuoteFilter(event) {
    props.setQuoteTerm(event);
  }
  return (
    <div className="inputfilterName">
      <p>Filter by quote: </p>
      <input type="text" onChange={handleQuoteFilter} />
    </div>
  );
}
export default FilterByQuote;
