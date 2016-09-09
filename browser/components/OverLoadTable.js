import React from 'react';

export default class OverLoadTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSobrecargas: []
    };
  }

  componentWillMount() {
    this.setState({
      dataSobrecargas: this.props.dataSobrecargas
    });
  }


  render() {
    let {dataSobrecargas} = this.state;
    let data = [];
    let head = (
      <tr>
        <th>Equipo</th>
        <th>Sobrecarga (MW)</th>
      </tr>
    );

    dataSobrecargas.forEach((d) => {
      data.push(
        <tr key={d.linea}>
          <td>{d.linea}</td>
          <td>{d.value}</td>
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
