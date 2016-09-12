import React from 'react';

export default class DropdownInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      colSpan: null,
      elements: []
    };
  }

  componentWillMount() {
    this.setState({
      elements: this.props.elements,
      colSpan: this.colSpan
    });
  }

  render() {
    let head = (
      <tr>
        <th>Unidad</th>
        <th>Generación Real</th>
        <th>Programa DEORT</th>
        <th>ON</th>
        <th>OFF</th>
      </tr>
    );
    let data = [];

    this.state.elements.forEach((item, id) => {
      let color1 = (item.arranque)? "green" : "gray";
      let color2 = (item.parada)? "green" : "gray";

      data.push(
        <tr key={item.nombe + "" + id}>
          <td>{item.nombre}</td>
          <td>{item.genReal.toFixed(2)}</td>
          <td>{item.progrDEORT.toFixed(2)}</td>
          <td className={color1}></td>
          <td className={color2}></td>
        </tr>
      );
    });

    return (
      <tr>
        <td colSpan={this.state.colSpan} className="center">
          <div>
            <table>
              <thead>{head}</thead>
              <tbody>{data}</tbody>
            </table>
          </div>
        </td>
      </tr>
    );
  }
}
