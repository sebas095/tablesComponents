import React from 'react';

export default class TableComponent extends React.Component {
  constructor() {
    super();
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
