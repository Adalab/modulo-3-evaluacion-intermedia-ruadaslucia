import '../styles/filterQuote.scss';
function FilterByQuote(props) {
  function handleQuoteFilter(event) {
    props.setQuoteTerm(event);
  }
  return (
    <form className="inputfilterName">
      <label className="textQuote" htmlFor="">
        Filter by quote:
      </label>
      <input
        className="rectangleQuote"
        type="text"
        onChange={handleQuoteFilter}
      />
    </form>
  );
}
export default FilterByQuote;
