import '../styles/tableOfContent.scss';
function Table(props) {
  return (
    <>
      <div className="tableContainer">
        <table>
          <thead>
            <tr className="titleRow">
              <th className="tableQuote">Quote</th>
              <th>Character</th>
            </tr>
          </thead>
          <tbody className="tableContent">{props.trCharacters}</tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
