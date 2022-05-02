import '../styles/tableOfContent.scss';
import FilterByQuote from './FilterByQuote';
function table(props) {
  return (
    <FilterByForm handleQuoteFilter/>
    <div>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>{props.trCharacters}</tbody>
      </table>
    </div>
  );
}
export default table;
