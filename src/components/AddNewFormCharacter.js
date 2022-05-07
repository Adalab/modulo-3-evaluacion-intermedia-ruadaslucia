import '../styles/addNewFormCharacter.scss';
function AddNewFormCharacter() {
  return (
    <div className="newCharacterForm">
      <p className="textNewCharacter">Character</p>
      <input className="newCharacterInput" type="text" name="character" />
    </div>
  );
}
export default AddNewFormCharacter;
