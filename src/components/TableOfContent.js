function Table(props) {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Character</th>
            </tr>
          </thead>
          <tbody>{props.trCharacters}</tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
