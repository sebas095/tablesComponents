import React from 'react';

export default class ContingencyTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataContingencias: {}
    };
  }

  componentWillMount() {
    this.setState({
      dataContingencias: this.props.dataContingencias
    });
  }

  render() {
    let data = [];
    let {dataContingencias} = this.state;
    let head = (
      <tr>
        <th>ContingenciaID</th>
        <th>Sobrecarga equipo supervisado (MW)</th>
      </tr>
    );

    dataContingencias.forEach((item) => {
      data.push(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.value.toFixed(2)}</td>
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
