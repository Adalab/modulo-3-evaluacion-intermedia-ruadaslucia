import './App.css';

function App() {
  const url =
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json';
  //useStates

  //funciones
  return (
    <div className="App">
      <h1>Friends quotes</h1>
      <div className="containerFilters">
        <div className="inputfilterName">
          <p>Filter by quote: </p>
          <input type="text" value="" />
        </div>
        <div className="selectFilterCharacter">
          <p>Filter by character: </p>
          <select name="select" id="">
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
    </div>
  );
}

export default App;
