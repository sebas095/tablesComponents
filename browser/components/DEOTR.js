import React from 'react';
import RDTable from './RDTable';
import TableComponent from './TableComponent';
import InfoTable from './InfoTable';
import ILTable from './ILTable';
import DB from '../store/infactibilidades.json';
import DATA from '../store/data.json';


export default class DEOTR extends React.Component {
  constructor() {
    super();
    this.state = {
      tableType: "",
      filter: ""
    };
  }

  changeTable(ev) {
    this.setState({tableType: ev.target.id});
  }

  render() {
    let tb, id = "";
    if (this.state.tableType === "tabla") {
      tb = <TableComponent dataTable={this.props.store}/>
      id = "tb inf";
    } else {
      tb = <InfoTable dataInfo={this.props.store}/>
      id = "inf";
    }

    return (
      <div>
        <div className="row">
          <div className="col-4">
            <button>Recurso Hidráulico y Térmico Despachados Centralmente</button>
          </div>
          <div className="col-4">
            <button>Recurso Hidráulico Despachados Centralmente</button>
          </div>
          <div className="col-4">
            <button>Recurso Térmico Despachados Centralmente</button>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <button>Recurso No Despachado Centralmente</button>
          </div>
          <div className="col-4">
            <button>	Recurso Despachable por DEO</button>
          </div>
          <div className="col-4">
            <button>Desviación > Pdesv</button>
          </div>
        </div><br/><br/>
        <div className="row">
          <h3>RESULTADOS DEO-TR</h3>
          <div className={"col-6 " + id}>
            <div className="row">
              <div className="col-6">
                <button id="infoGr" onClick={this.changeTable.bind(this)}>INFOGRAFÍA</button>
              </div>
              <div className="col-6">
                <button id="tabla" onClick={this.changeTable.bind(this)}>TABLA</button>
              </div>
            </div>
            {tb}
          </div>
          <div className="col-6" id="space">
            <div className="row">
              <RDTable dataRD={DATA.dataRD} />
            </div>
            <div className="row">
              <ILTable store={DB}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
