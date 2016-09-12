import React from 'react';
import DropdownRow from './DropdownRow';

export default class ContingencyTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataContingencias: {},
      table: [],
      info: []
    };
  }

  componentWillMount() {
    let data = [];
    let info = [];

    this.props.dataContingencias.forEach((item, id) => {
      data.push(
        <tr key={item.id}>
          <td onClick={this.handleDisplay.bind(this)} id={id}>{item.id}</td>
          <td>{item.value.toFixed(2)}</td>
        </tr>
      );

      info.push(null);
    });

    this.setState({
      dataContingencias: this.props.dataContingencias,
      table: data,
      info: info
    });
  }

  handleDisplay(ev) {
    let {info }= this.state;
    let index = Number(ev.target.id);

    if (info[index] === null) {
      info[index] = (
        <DropdownRow
          colSpan={2}
          key={"key" + index}
          elements={this.state.dataContingencias[index].elements}
          type="contingency"
        />
      );
    } else {
      info[index] = null;
    }

    this.setState({
      info: info
    });
  }

  render() {
    let data = [];
    let head = (
      <tr>
        <th>ContingenciaID</th>
        <th>Sobrecarga equipo supervisado (MW)</th>
      </tr>
    );

    this.state.table.forEach((val, i) => {
      data.push(val);
      if (this.state.info[i] !== null) {
        data.push(this.state.info[i]);
      }
    });

    return (
      <div>
        <table>
          <thead>{head}</thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}
