import React from 'react';

export default class ILTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sebastian</td>
            <td>Duque Restrepo</td>
            <td>21</td>
          </tr>
          <tr>
            <td>Sebastian</td>
            <td>Duque Restrepo</td>
            <td>21</td>
          </tr>
          <tr>
            <td>Sebastian</td>
            <td>Duque Restrepo</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
