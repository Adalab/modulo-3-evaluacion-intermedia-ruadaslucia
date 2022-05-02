function Table(props) {
  return (
    <>
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
export default Table;
