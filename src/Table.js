import React, { Component } from "react";

class Table extends Component {
  render() {
    const { headerData, characterData, removeCharacter } = this.props;

    return (
      <table>
        <TableHeader headerData={headerData} />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

const TableHeader = props => {
  const rows = props.headerData.map((row, index) => {
    return (
      <th key={index}>{row}</th>
    )
  })

  return (
    <thead>
      <tr>
        {rows}
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
