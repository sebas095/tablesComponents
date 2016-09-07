import React from 'react';

let dataCTmp = [
  {id: 1, nombre: "Elemento 1", min: 0, max: 100},
  {id: 2, nombre: "Elemento 2", min: 0, max: 60},
  {id: 3, nombre: "Elemento 3", min: 0, max: 70},
  {id: 4, nombre: "Elemento 4", min: 0, max: 80},
  {id: 5, nombre: "Elemento 5", min: 0, max: 110}
];

let dataLTmp = [
  {linea: "linea1", sobrecarga: "value1"},
  {linea: "linea2", sobrecarga: "value2"},
  {linea: "linea3", sobrecarga: "value3"},
  {linea: "linea4", sobrecarga: "value4"},
  {linea: "linea5", sobrecarga: "value5"},
];

let dataCtgTmp = [
  {id: 1, valor: "value 1"},
  {id: 2, valor: "value 2"},
  {id: 3, valor: "value 3"},
  {id: 4, valor: "value 4"},
  {id: 5, valor: "value 5"}
];


export default class ILTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let dataC = [];
    let dataL = [];
    let dataCtg = [];

    let tb1 = (
      <table>
        <tbody>
          <tr>
            <th>Cortes</th>
            <td></td>
          </tr>
          <tr>
            <th>Sobrecargas</th>
            <td></td>
          </tr>
          <tr>
            <th>Contingencias</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    );

    dataCTmp.map((row) => {
      dataC.push(
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.nombre}</td>
          <td>{row.min}</td>
          <td>{row.max}</td>
        </tr>
      );
    });

    let tb2 = (
      <table>
        <thead>
          <tr>
            <th>CorteID</th>
            <th>Nombre</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>{dataC}</tbody>
      </table>
    );

    dataLTmp.map((row) => {
      dataL.push(
        <tr key={row.linea}>
          <td>{row.linea}</td>
          <td>{row.sobrecarga}</td>
        </tr>
      );
    });

    let tb3 = (
      <table>
        <thead>
          <tr>
            <th>Linea</th>
            <th>Sobrecarga (MW)</th>
          </tr>
        </thead>
        <tbody>{dataL}</tbody>
      </table>
    );

    dataCtgTmp.map((row) => {
      dataCtg.push(
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.valor}</td>
        </tr>
      );
    });

    let tb4 = (
      <table>
        <thead>
          <tr>
            <th>ContingenciaID</th>
            <th>Valor (MW)</th>
          </tr>
        </thead>
        <tbody>{dataCtg}</tbody>
      </table>
    );

    return (
      <div>
        <h1>RESUMEN INFACTIBILIDAD/LIMITACIONES</h1>
        <div>{tb1}</div>
        <div>{tb2}</div>
        <div>{tb3}</div>
        <div>{tb4}</div>
      </div>
    );
  }
}
