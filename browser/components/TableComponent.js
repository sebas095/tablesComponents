import React from 'react';

export default class TableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dataTable: []
    };
  }

  componentWillMount() {
    this.setState({
      dataTable: this.props.dataTable
    });
  }

  render() {
    let data = [];
    let head = (
      <tr>
        <th>Mérito</th>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Disponibilidad</th>
        <th>Programa Redespachado</th>
        <th>Generación Real</th>
        <th>Programa DEO-TR</th>
        <th>DeltaGen</th>
        <th>Reserva Secundaria</th>
        <th>Reserva Terciaria</th>
        <th>Número Unidades</th>
        <th>Número Arranque</th>
        <th>Número Paradas</th>
        <th>Mínimo Generación</th>
        <th>Máximo Generación</th>
      </tr>
    );

    this.state.dataTable.forEach((item, id) => {
      data.push(
        <tr key={id}>
          <td>{item.posicion}</td>
          <td>{item.nombre}</td>
          <td>{item.tipo}</td>
          <td>{item.disponibilidad}</td>
          <td>{item.progrRedespacho}</td>
          <td>{item.genReal.toFixed(1)}</td>
          <td>{item.progrDEORT.toFixed(1)}</td>
          <td>{item.deltaGen.toFixed(1)}</td>
          <td>{item.reserva2}</td>
          <td>{item.reserva3}</td>
          <td>{item.nroUnidades}u</td>
          <td>{item.arranques.length}u</td>
          <td>{item.paradas.length}u</td>
          <td>{item.minG}</td>
          <td>{item.maxG}</td>
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
