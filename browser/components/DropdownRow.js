import React from 'react';

export default class DropdownRow extends React.Component {
  constructor() {
    super();
    this.state = {
      colSpan: null,
      elements: [],
      type: ''
    };
  }

  componentWillMount() {
    this.setState({
      colSpan: this.props.colSpan,
      elements: this.props.elements,
      type: this.props.type
    });
  }

  render() {
    let row;
    let data = [];

    if (this.state.type === "court") {
      this.state.elements.forEach((d, i) => {
        data.push(<li key={i * i}>{d}</li>);
      });
      row = (<ul>{data}</ul>);
    } else {
      this.state.elements.fallados.forEach((d, i) => {
        data.push(<li key={i * i}>{d}</li>)
      });
      row = (
        <div>
          <p>Supervisado:</p>
          <ul>
            <li>{this.state.elements.supervisado}</li>
          </ul>
          <p>Fallados:</p>
          <ul>{data}</ul>
        </div>
      );
    }

    return (
      <tr>
        <td colSpan={this.state.colSpan} className="center">
          {row}
        </td>
      </tr>
    );
  }
}
