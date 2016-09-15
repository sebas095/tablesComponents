import React from 'react';
import RATable from './RATable';
import TableComponent from './TableComponent';
import InfoTable from './InfoTable';
import ILTable from './ILTable';
import {Row, Input, Button} from 'react-materialize';
import io from 'socket.io-client';

const socket = io.connect();

export default class DEOTR extends React.Component {
  constructor() {
    super();
    this.state = {
      store: {},
      inf: {},
      res: {},
      tableType: "",
      filter: [],
      filterDesv: ""
    };
  }

  componentWillMount() {
    socket.on('data', (msg) => {
      this.setState({
        res: msg.reservas,
        store: msg.recursos,
        inf: msg.infactibilidades,
        tableType: "infoGr"
      });
    });
  }

  changeTable(ev) {
    this.setState({tableType: ev.target.id});
  }

  handleFilter(ev) {
    let {value, checked} = ev.target;
    let {filter} = this.state;
    let index = filter.indexOf(value);

    if (checked) {
      if (index < 0) {
        filter.push(value);
      }
    } else {
      if (index >= 0) {
        filter.splice(index, 1);
      }
    }

    this.setState({
      filter: filter
    });
  }

  handleFilterDesv(ev) {
    this.setState({
      filterDesv: ev.target.value
    });
  }

  render() {
    let tb, id = "";
    if (this.state.tableType === "tabla") {
      tb = <TableComponent dataTable={this.state.store.dataR} filter={this.state.filter} filterDesv={this.state.filterDesv} />
      id = "tb inf";
    } else {
      tb = <InfoTable dataInfo={this.state.store.dataR} filter={this.state.filter} filterDesv={this.state.filterDesv} />
      id = "inf";
    }

    return (
      <div>
        <Row>
          <div className="col l4 m4 s12">
            <Input
              name='group1'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='1'
              label='Recurso Hidráulico y Térmico Despachados Centralmente'
            />
          </div>
          <div className="col l4 m4 s12">
            <Input
              name='group2'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='2'
              label='Recurso Hidráulico Despachados Centralmente'
            />
          </div>
          <div className="col l4 m4 s12">
            <Input
              name='group3'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='3'
              label='Recurso Térmico Despachados Centralmente'
            />
          </div>
        </Row>
        <Row>
          <div className="col l4 m4 s12">
            <Input
              name='group4'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='4'
              label='Recurso No Despachado Centralmente'
            />
          </div>
          <div className="col l4 m4 s12">
            <Input
              name='group5'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='5'
              label='Recurso Despachable por DEO'
            />
          </div>
          <div className="col l4 m4 s12">
            <Input s={6} label="Desviación > Pdesv" onChange={this.handleFilterDesv.bind(this)} />
          </div>
        </Row>
        <Row>
          <h4>RESULTADOS DEO-TR</h4>
          <div className="col l6 m6 s12">
            <Row>
              <div className="col l6 m6 s12">
                <Button id="infoGr" onClick={this.changeTable.bind(this)}>INFOGRAFÍA</Button>
              </div>
              <div className="col l6 m6 s12">
                <Button id="tabla" onClick={this.changeTable.bind(this)}>TABLA</Button>
              </div>
            </Row>
            <div className={id}>
              {tb}
            </div>
          </div>
          <div className="col l6 m6 s12" id="space">
            <Row>
              <RATable dataRD={this.state.res} recursos={this.state.store.dataRD}/>
            </Row>
            <Row>
              <ILTable store={this.state.inf} />
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}
