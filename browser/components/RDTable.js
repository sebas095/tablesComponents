import React from 'react';

export default class RDTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataRD: {}
    };
  }

  componentWillMount() {
    this.setState({
      dataRD: this.props.dataRD
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

    let tb3 = (
      <table>
        <thead>
          <tr>
            <th>TIPO RECURSO</th>
            <th>PROGRAMA REDESPACHO</th>
            <th>GENERACIÓN REAL</th>
            <th>PROGRAMA DEO-TR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>HIDRÁULICOS</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th>TÉRMICOS</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th>MENORES</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th>TRANSACCIONES INTERNACIONALES</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div>
        <h1>RESULTADOS AGREGADOS</h1>
        <div>{tb1}</div>
        <div>{tb2}</div>
        <div>{tb3}</div>
      </div>
    );
  }
}
