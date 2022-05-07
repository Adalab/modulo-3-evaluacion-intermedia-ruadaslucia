import '../styles/addNewFormQuote.scss';
function AddNewFormQuote() {
  return (
    <div className="newQuoteForm">
      <p className="textNewQuote">Quote</p>
      <input className="newQuote" type="text" name="quote" />
    </div>
  );
}
export default AddNewFormQuote;
