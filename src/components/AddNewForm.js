import AddNewFormCharacter from './AddNewFormCharacter';
import AddNewFormQuote from './AddNewFormQuote';
import '../styles/addNewForm.scss';
function addNew(props) {
  const handleAddCharacter = (event) => {
    event.preventDefault();
    props.addCharacter(event);
  };

  return (
    <form className="formNewLine">
      <h3>Add a new quote</h3>
      <div className="newCharacter">
        <AddNewFormQuote />
        <AddNewFormCharacter />
        <button className="addButton" onClick={handleAddCharacter}>
          Add character and quote
        </button>
      </div>
    </form>
  );
}
export default addNew;
