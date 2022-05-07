import '../styles/filterCharacter.scss';
function FilterByCharacter(props) {
  function handleCharacterFilter(event) {
    props.characterFilter(event);
  }

  return (
    <div>
      <form className="selectFilterCharacter">
        <label className="selectText" htmlFor="">
          Filter by character:
        </label>
        <select
          className="selectChar"
          name="select"
          onChange={handleCharacterFilter}
        >
          <option value="all">All characters</option>
          <option value="Rachel">Rachel</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Ross">Ross</option>
          <option value="Chandler">Chandler</option>
        </select>
      </form>
    </div>
  );
}
export default FilterByCharacter;
