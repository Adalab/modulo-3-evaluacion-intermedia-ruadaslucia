import Filter from './Filter';

function table(props) {
  return (
    <>
      <Filter />
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
    </>
  );
}
export default table;
