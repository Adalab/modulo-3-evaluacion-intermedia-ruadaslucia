import '../styles/addNewForm.scss';
function addNew() {
  return (
    <div className="newCharacter">
      <h3>Add a new quote</h3>
      <form>
        <p>quote</p>
        <input type="text" name="quote" />
        <p>character</p>
        <input type="text" name="character" />
        <button onClick={addCharacter}>Add character and quote</button>
      </form>
    </div>
  );
}
export default addNew;
