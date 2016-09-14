import React from 'react';

export default class RATable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let tb1 = (
      <table>
        <tbody>
          <tr>
            <th>Demanda del Sistema</th>
            <td>{(this.props.dataRD.Dgen)? this.props.dataRD.Dgen.toFixed(1) : ""}</td>
          </tr>
          <tr>
            <th>Generación total programada</th>
            <td>{(this.props.dataRD.genDEOTR)? this.props.dataRD.genDEOTR.toFixed(1) : ""}</td>
          </tr>
          <tr>
            <th>Perdidas del sistema</th>
            <td>{(this.props.dataRD.Perd)? this.props.dataRD.Perd.toFixed(1) : ""}</td>
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
            <td>{this.props.dataRD.rSecundariaDOWN}</td>
            <td>{this.props.dataRD.rSecundariaUP}</td>
          </tr>
          <tr>
            <th>Terciaria</th>
            <td>{this.props.dataRD.rTerciariaDOWN}</td>
            <td>{this.props.dataRD.rTerciariaUP}</td>
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

    if (typeof this.props.recursos === "object") {
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
    }

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
