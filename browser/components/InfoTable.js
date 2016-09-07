import React from 'react';

export default class InfoTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let dataR = this.props.dataR;
    let data = [];

    dataR.forEach((d) => {
      data.push(
        <li key={d.nombre}>{d.nombre}</li>
      );
    });

    return (
      <div>
        <ul>
          {data}
        </ul>
      </div>
    );
  }
}
