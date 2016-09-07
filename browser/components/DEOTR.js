import React from 'react';

export default class DEOTR extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <p>INFOGRAFICA - INFOTABLA</p>
        </div>
        <div className="col-6">
          <div className="row">
            <p>RESUMEN RESERVA/DEMANDA</p>
          </div>
          <div className="row middle">
            <p>RESUMEN INFACTIBILIDAD/LIMITACIONES</p>
          </div>
        </div>
      </div>
    );
  }
}
