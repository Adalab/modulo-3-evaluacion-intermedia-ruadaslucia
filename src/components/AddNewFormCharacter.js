import '../styles/AddNewFormCharacter.scss';
function AddNewFormCharacter() {
  return (
    <form className="newCharacterForm">
      <p className="textNewCharacter">Character</p>
      <input className="newCharacterInput" type="text" name="character" />
    </form>
  );
}
export default AddNewFormCharacter;
