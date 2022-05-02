import '../styles/filterForm.scss';
function FilterForm(props) {
  return (
    <div className="containerFilters">
      <div className="inputfilterName">
        <p>Filter by quote: </p>
        <input type="text" onChange={props.handleQuoteFilter} />
      </div>
      <div className="selectFilterCharacter">
        <p>Filter by character: </p>
        <select name="select" onChange={props.handleCharacterFilter}>
          <option value="all">All characters</option>
          <option value="Rachel">Rachel</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Ross">Ross</option>
          <option value="Chandler">Chandler</option>
        </select>
      </div>
    </div>
  );
}
export default FilterForm;
