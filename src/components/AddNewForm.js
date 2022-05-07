import AddNewFormCharacter from './AddNewFormCharacter';
import AddNewFormQuote from './AddNewFormQuote';
import '../styles/addNewForm.scss';
function addNew(props) {
  const addCharacter = (event) => {
    event.preventDefault();
    props.addCharacter(event);
  };

  return (
    <div className="formNewLine">
      <h3>Add a new quote</h3>
      <div className="newCharacter">
        <AddNewFormQuote />
        <AddNewFormCharacter />
        <button onClick={addCharacter}>Add character and quote</button>
      </div>
    </div>
  );
}
export default addNew;
