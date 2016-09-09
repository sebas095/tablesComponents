import React from 'react';
import CourtTable from './CourtTable';
import OverLoadTable from './OverLoadTable';
import ContingencyTable from './ContingencyTable';

export default class ILTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableType: "crt"
    };
  }

  changeComponent(ev) {
    this.setState({tableType: ev.target.id});
  }

  render() {
    let tb;
    if (this.state.tableType === "crt") {
      tb = <CourtTable dataCortes={this.props.store.dataCortes} />
    } else if (this.state.tableType === "sbcs") {
      tb = <OverLoadTable dataSobrecargas={this.props.store.dataSobrecargas} />
    } else {
      tb = <ContingencyTable dataContingencias={this.props.store.dataContingencias} />
    }

    return (
      <div>
        <h1>RESUMEN INFACTIBILIDAD/LIMITACIONES</h1>
        <div>
          <button id="crt" onClick={this.changeComponent.bind(this)}>Cortes</button>
          <button id="sbcs" onClick={this.changeComponent.bind(this)}>Sobrecargas</button>
          <button id="ctg" onClick={this.changeComponent.bind(this)}>Contingencias</button>
        </div><br/>
        <div>{tb}</div>
      </div>
    );
  }
}
