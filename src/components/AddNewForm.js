import AddNewFormCharacter from './AddNewFormCharacter';
import AddNewFormQuote from './AddNewFormQuote';
function addNew(props) {
  const addCharacter = (event) => {
    event.preventDefault();
    props.addCharacter(event);
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
