import React from 'react';
import RDTable from './RDTable';
import TableComponent from './TableComponent';
import InfoTable from './InfoTable';
import ILTable from './ILTable';
import {Row, Input, Button} from 'react-materialize';
import DB from '../store/infactibilidades.json';
import DATA from '../store/data.json';

/*
let list = [];

function h(ev) {
  let {value, checked} = ev.target;
  if (checked) {
    if (list.indexOf(value) < 0) {
      list.push(value);
    }
  } else {
    if (list.indexOf(value) >= 0) {
      list.splice(list.indexOf(value), 1);
    }
  }
  console.log(list);
}
<Row>
  <Input name='group1' onChange={h.bind(this)} type='checkbox' value='red' label='Red' />
  <Input name='group2' onChange={h.bind(this)} type='checkbox' value='yellow' label='Yellow'/>
  <Input name='group3' onChange={h.bind(this)} type='checkbox' value='green' label='Green'/>
  <Input name='group4' onChange={h.bind(this)} type='checkbox' value='brown' label='Brown' />
</Row>
*/

export default class DEOTR extends React.Component {
  constructor() {
    super();
    this.state = {
      tableType: "",
      filter: []
    };
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
    console.log(filter);
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
        <Row>
          <div className="col-4">
            <Input
              name='group1'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='HT'
              label='Recurso Hidráulico y Térmico Despachados Centralmente'
            />
          </div>
          <div className="col-4">
            <Input
              name='group2'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='HD'
              label='Recurso Hidráulico Despachados Centralmente'
            />
          </div>
          <div className="col-4">
            <Input
              name='group3'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='TD'
              label='Recurso Térmico Despachados Centralmente'
            />
          </div>
        </Row>
        <Row>
          <div className="col-4">
            <Input
              name='group4'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='ND'
              label='Recurso No Despachado Centralmente'
            />
          </div>
          <div className="col-4">
            <Input
              name='group5'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='DEO'
              label='Recurso Despachable por DEO'
            />
          </div>
          <div className="col-4">
            <Input
              name='group6'
              onChange={this.handleFilter.bind(this)}
              type='checkbox'
              value='Desv'
              label='Desviación > Pdesv'
            />
          </div>
        </Row>
        <br/><br/>
        <div className="row">
          <h4>RESULTADOS DEO-TR</h4>
          <div className={"col-6 " + id}>
            <div className="row">
              <div className="col-6">
                <Button id="infoGr" onClick={this.changeTable.bind(this)}>INFOGRAFÍA</Button>
              </div>
              <div className="col-6">
                <Button id="tabla" onClick={this.changeTable.bind(this)}>TABLA</Button>
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
