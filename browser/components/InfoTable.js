import React from 'react';
import DropdownInfo from './DropdownInfo';
import LockIcon from 'react-icons/lib/md/lock';
import SettingsIcon from 'react-icons/lib/md/settings';
import MoodIcon from 'react-icons/lib/md/mood';

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

    this.props.dataInfo.forEach((item, id) => {
      data.push(
        <tr key={item.name + "" + id}>
          <td>{item.posicion}</td>
          <td>
            <LockIcon /><br />
            <SettingsIcon /><br />
            <MoodIcon />
          </td>
          <td onClick={this.handleDisplay.bind(this)} id={id}>{item.nombre}</td>
          <td>{item.nroUnidades}u</td>
          <td>{item.progrRedespacho.toFixed(1)}</td>
          <td>{item.minTecnico}</td>
          <td>GRAFICA...</td>
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

  handleDisplay(ev) {
    let {info} = this.state;
    let index = Number(ev.target.id);

    if (info[index] === null) {
      info.fill(null);
      info[index] = (
        <DropdownInfo
          colSpan={8}
          key={"key" + index + "InfoTable"}
          elements={this.state.dataInfo[index].unidades}
        />
      );
    } else {
      info.fill(null);
    }

    this.setState({
      info: info
    });
  }

  render() {
    let {dataInfo} = this.state;
    let data = [];

    this.state.table.forEach((val, i) => {
      data.push(val);
      if (this.state.info[i] !== null) {
        data.push(this.state.info[i]);
      }
    });

    return (
      <div>
        <table>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}
