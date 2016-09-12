import React from 'react';
import DropdownRow from './DropdownRow';

export default class CourtTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataCortes: {},
      table: [],
      info: []
    };
  }

  componentWillMount() {
    let index = Object.keys(this.props.dataCortes);
    let data = [];
    let info = [];

    index.forEach((i) => {
      let value = this.props.dataCortes[i];
      data.push(
        <tr key={value.id}>
          <td onClick={this.handleDisplay.bind(this)}>{value.id}</td>
          <td>{value.nombre}</td>
          <td>{value.min}</td>
          <td>{value.max}</td>
        </tr>
      );

      info.push(null);
    });

    this.setState({
      dataCortes: this.props.dataCortes,
      table: data,
      info: info
    });
  }

  handleDisplay(ev) {
    let {info} = this.state;
    let index = Number(ev.target.innerText) - 1;

    if (info[index] === null) {
      info[index] = (
        <DropdownRow
          colSpan={4}
          key={"key" + index}
          elements={this.state.dataCortes["" + (index + 1)].elementos}
          type="court"
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
        <th>CorteID</th>
        <th>Nombre Corte</th>
        <th>Min</th>
        <th>Max</th>
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
