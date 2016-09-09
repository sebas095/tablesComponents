import React from 'react';

export default class CourtTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataCortes: {}
    };
  }

  componentWillMount() {
    this.setState({
      dataCortes: this.props.dataCortes
    });
  }

  render() {
    let index = Object.keys(this.state.dataCortes);
    let data = [];
    let head = (
      <tr>
        <th>CorteID</th>
        <th>Nombre Corte</th>
        <th>Min</th>
        <th>Max</th>
      </tr>
    );

    index.forEach((i) => {
      let value = this.state.dataCortes[i];
      data.push(
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.nombre}</td>
          <td>{value.min}</td>
          <td>{value.max}</td>
        </tr>
      );
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
