import '../styles/AddNewFormQuote.scss';
function AddNewFormQuote() {
  return (
    <form className="newQuoteForm">
      <p className="textNewQuote">Quote</p>
      <input className="newQuote" type="text" name="quote" />
    </form>
  );
}
export default AddNewFormQuote;
