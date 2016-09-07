import React from 'react';
import RDTable from './RDTable';
import InfoTable from './InfoTable';
import ILTable from './ILTable';

export default class DEOTR extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <p>INFOGRAFICA - INFOTABLA</p>
          <InfoTable dataR={this.props.store.dataR}/>
        </div>
        <div className="col-6">
          <div className="row">
            <RDTable dataRD={this.props.store.dataRD} />
          </div>
          <div className="row">
            <ILTable />
          </div>
        </div>
      </div>
    );
  }
}
