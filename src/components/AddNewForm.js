import AddNewFormCharacter from './AddNewFormCharacter';
import AddNewFormQuote from './AddNewFormQuote';
function addNew() {
  const addCharacter = (event) => {
    event.preventDefault();
    const character = {
      //objeto con informacion que quieres que lleve cada uno
      quote: event.target.form.elements.quote.value,
      character: event.target.form.elements.character.value,
    };
  };

  return (
    <div className="newCharacter">
      <h3>Add a new quote</h3>
      <form>
        <AddNewFormQuote />
        <AddNewFormCharacter />
        <button onClick={addCharacter}>Add character and quote</button>
      </form>
    </div>
  );
}
export default addNew;
