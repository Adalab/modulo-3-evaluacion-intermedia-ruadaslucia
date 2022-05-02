function getQuote(props) {
  return (
    <div className="inputfilterName">
      <p>Filter by quote: </p>
      <input type="text" onChange={props.handleQuoteFilter} />
    </div>
  );
}
export default getQuote;
