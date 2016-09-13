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

  changeData() {
    let data = [];
    let {dataTable} = this.state;
    let {filter, filterDesv} = this.props;
    filterDesv = (filterDesv.length > 0)? Number(filterDesv) : NaN;

    dataTable.forEach((item, id) => {
      for(let i = 0; i < filter.length; i++) {
        if ((filter[i] === "1" && item.despacho_central && (item.tipo === "H" || item.tipo === "T" || item.tipo === "TR" || item.tipo === "HD")) ||
            (filter[i] === "2" && item.despacho_central && (item.tipo === "H" || item.tipo === "HD")) ||
            (filter[i] === "3" && (item.tipo === "T" || item.tipo === "TR")) ||
            (filter[i] === "4" && !item.despacho_central && (item.tipo === "HM" || item.tipo === "TM" || item.tipo === "HD")) ||
            (filter[i] === "5" && item.despachable) || (!isNaN(filterDesv) && item.deltaGen > filterDesv)) {

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
          break;
        }
      }
    });

    return data;
  }

  handleFilter() {
    let data = [];
    let {dataTable} = this.state;
    let {filterDesv} = this.props;
    filterDesv = (filterDesv.length > 0)? Number(filterDesv) : NaN;

    dataTable.forEach((item, id) => {
      if (!isNaN(filterDesv) && item.deltaGen > filterDesv) {
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
      }
    });

    return data;
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

    if (this.props.filter.length === 0 && this.props.filterDesv.length === 0) {
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
    } else if (this.props.filter.length === 0 && this.props.filterDesv.length > 0) {
      data = this.handleFilter();
    } else {
      data = this.changeData();
    }

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
