import React from 'react';
import CourtTable from './CourtTable';
import OverLoadTable from './OverLoadTable';
import {Button} from 'react-materialize';
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
        <h4>RESUMEN INFACTIBILIDAD/LIMITACIONES</h4>
        <div>
          <Button id="crt" onClick={this.changeComponent.bind(this)}>Cortes</Button>&nbsp;
          <Button id="sbcs" onClick={this.changeComponent.bind(this)}>Sobrecargas</Button>&nbsp;
          <Button id="ctg" onClick={this.changeComponent.bind(this)}>Contingencias</Button>
        </div><br/>
        <div className="scr">{tb}</div>
      </div>
    );
  }
}
