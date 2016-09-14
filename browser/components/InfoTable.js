import React from 'react';
import DropdownInfo from './DropdownInfo';
import LockIcon from 'react-icons/lib/md/lock';
import SettingsIcon from 'react-icons/lib/md/settings';
import MoodIcon from 'react-icons/lib/md/mood';
import Chart from 'react-chartjs2';

let flag1 = false;
let flag2 = false;
const BarChart = (
  <Chart
    type="horizontalBar"
    data={{
      labels: ["Test1"],
      datasets: [{
        data: [10],
        backgroundColor: ['rgba(27, 137, 177, 0.87)'],
         borderColor: ['rgba(14, 113, 194, 0.88)']
      }]
    }}
    options={{
      responsive: true,
      legend: {
        display: false
      }
    }}
    width="80"
    height="44"
  />
);

export default class InfoTable extends React.Component {
  constructor() {
    super();
    this.state = {
      dataInfo: [],
      table: [],
      info: []
    };
  }

  componentWillMount() {
    let data = [];
    let info = [];

    if (typeof this.props.dataInfo === "object") {
      this.props.dataInfo.forEach((item, id) => {
        data.push(
          <tr key={item.nombre + "" + id}>
            <td>{item.posicion}</td>
            <td>
              <LockIcon /><br />
              <SettingsIcon /><br />
              <MoodIcon />
            </td>
            <td onClick={this.handleDisplay.bind(this)} id={[id]}>{item.nombre}</td>
            <td>{item.nroUnidades}u</td>
            <td>{item.progrRedespacho.toFixed(1)}</td>
            <td>{item.minTecnico}</td>
            <td>{BarChart}</td>
            <td>{item.disponibilidad}</td>
          </tr>
        );

        info.push(null);
      });

      this.setState({
        dataInfo: this.props.dataInfo,
        table: data,
        info: info
      });
    }
  }

  handleDisplay(ev) {
    let {info} = this.state;
    let target = ev.target.id.split(',');
    let index = Number(target[0]);

    if (target.length > 1) {
      let id = Number(target[1]);
      if (info[id] === null) {
        info.fill(null);
        info[index] = null;
        info[id] = (
          <DropdownInfo
            key={"key" + index + "InfoTable"}
            elements={this.state.dataInfo[index].unidades}
          />
        );
      } else {
        info.fill(null);
      }
    } else {
      if (info[index] === null) {
        info.fill(null);
        info[index] = (
          <DropdownInfo
            key={"key" + index + "InfoTable"}
            elements={this.state.dataInfo[index].unidades}
          />
        );
      } else {
        info.fill(null);
      }
    }

    this.setState({
      info: info
    });
  }

  changeData() {
    let data = [];
    let {dataInfo} = this.state;
    let {filter, filterDesv} = this.props;
    let index = 0;
    filterDesv = (filterDesv.length > 0)? Number(filterDesv) : NaN;

    dataInfo.forEach((item, id) => {
      for (let i = 0; i < filter.length; i++) {
        if ((filter[i] === "1" && item.despacho_central && (item.tipo === "H" || item.tipo === "T" || item.tipo === "TR" || item.tipo === "HD")) ||
            (filter[i] === "2" && item.despacho_central && (item.tipo === "H" || item.tipo === "HD")) ||
            (filter[i] === "3" && (item.tipo === "T" || item.tipo === "TR")) ||
            (filter[i] === "4" && !item.despacho_central && (item.tipo === "HM" || item.tipo === "TM" || item.tipo === "HD")) ||
            (filter[i] === "5" && item.despachable) || (!isNaN(filterDesv) && item.deltaGen > filterDesv)) {

          data.push(
            <tr key={item.nombre + "" + id}>
              <td>{item.posicion}</td>
              <td>
                <LockIcon /><br />
                <SettingsIcon /><br />
                <MoodIcon />
              </td>
              <td onClick={this.handleDisplay.bind(this)} id={[id, index]}>{item.nombre}</td>
              <td>{item.nroUnidades}u</td>
              <td>{item.progrRedespacho.toFixed(1)}</td>
              <td>{item.minTecnico}</td>
              <td>{BarChart}</td>
              <td>{item.disponibilidad}</td>
            </tr>
          );
          index++;
          break;
        }
      }
    });

    return data;
  }

  handleFilter() {
    let data = [];
    let {dataInfo} = this.state;
    let {filterDesv} = this.props;
    let index = 0;
    filterDesv = (filterDesv.length > 0)? Number(filterDesv) : NaN;

    dataInfo.forEach((item, id) => {
      if (!isNaN(filterDesv) && item.deltaGen > filterDesv) {
        data.push(
          <tr key={item.nombre + "" + id}>
            <td>{item.posicion}</td>
            <td>
              <LockIcon /><br />
              <SettingsIcon /><br />
              <MoodIcon />
            </td>
            <td onClick={this.handleDisplay.bind(this)} id={[id, index]}>{item.nombre}</td>
            <td>{item.nroUnidades}u</td>
            <td>{item.progrRedespacho.toFixed(1)}</td>
            <td>{item.minTecnico}</td>
            <td>{BarChart}</td>
            <td>{item.disponibilidad}</td>
          </tr>
        );
        index++;
      }
    });

    return data;
  }

  getIndex() {
    let {info} = this.state;
    for (let i = 0; i < info.length; i++) {
      if (info[i] !== null && info[i] !== undefined) {
        return i;
      }
    }
    return -1;
  }

  render() {
    let {dataInfo} = this.state;
    let data = [];
    let index = -1;

    if (this.props.filter.length === 0 && this.props.filterDesv.length === 0) {
      if (!flag2) index = this.getIndex();
      flag1 = false;
      flag2 = true;

      this.state.table.forEach((val, i) => {
        data.push(val);
        if (this.state.info[i] !== null && this.state.info[i] !== undefined && i !== index) {
          data.push(this.state.info[i]);
        }
      });
    } else if (this.props.filter.length === 0 && this.props.filterDesv.length > 0) {
      let tmp = this.handleFilter();
      if (!flag1) index = this.getIndex();
      flag1 = true;
      flag2 = false;

      tmp.forEach((val, i) => {
        data.push(val);
        if (this.state.info[i] !== null && this.state.info[i] !== undefined && i !== index) {
          data.push(this.state.info[i]);
        }
      });
    } else {
      let tmp = this.changeData();
      if (!flag1) index = this.getIndex();
      flag1 = true;
      flag2 = false;

      tmp.forEach((val, i) => {
        data.push(val);
        if (this.state.info[i] !== null && this.state.info[i] !== undefined && i !== index) {
          data.push(this.state.info[i]);
        }
      });
    }

    return (
      <div>
        <table>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}
