import React from 'react';

export default class RATable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataRD: {},
      recursos: []
    };
  }

  componentWillMount() {
    this.setState({
      dataRD: this.props.dataRD,
      recursos: this.props.recursos
    });
  }

  render() {
    let tb1 = (
      <table>
        <tbody>
          <tr>
            <th>Demanda del Sistema</th>
            <td>{this.state.dataRD.Dgen.toFixed(1)}</td>
          </tr>
          <tr>
            <th>Generación total programada</th>
            <td>{this.state.dataRD.genDEOTR.toFixed(1)}</td>
          </tr>
          <tr>
            <th>Perdidas del sistema</th>
            <td>{this.state.dataRD.Perd.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    );

    let tb2= (
      <table>
        <thead>
          <tr>
            <th>RESERVAS</th>
            <th>DOWN</th>
            <th>UP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Secundarias</th>
            <td>{this.state.dataRD.rSecundariaDOWN}</td>
            <td>{this.state.dataRD.rSecundariaUP}</td>
          </tr>
          <tr>
            <th>Terciaria</th>
            <td>{this.state.dataRD.rTerciariaDOWN}</td>
            <td>{this.state.dataRD.rTerciariaUP}</td>
          </tr>
        </tbody>
      </table>
    );

    let head = (
      <tr>
        <th>TIPO RECURSO</th>
        <th>PROGRAMA REDESPACHO</th>
        <th>GENERACIÓN REAL</th>
        <th>PROGRAMA DEO-TR</th>
      </tr>
    );

    let data = [];

    this.props.recursos.forEach((item, id) => {
      data.push(
        <tr key={id}>
          <th>{item.tipo}</th>
          <td>{item.progrRedespacho.toFixed(2)}</td>
          <td>{item.genReal.toFixed(2)}</td>
          <td>{item.progrDEORT.toFixed(2)}</td>
        </tr>
      );
    });

    let tb3 = (
      <table>
        <thead>{head}</thead>
        <tbody>{data}</tbody>
      </table>
    );

    return (
      <div>
        <h4>RESULTADOS AGREGADOS</h4>
        <div>{tb1}</div><br />
        <div>{tb2}</div><br />
        <div>{tb3}</div>
      </div>
    );
  }
}
