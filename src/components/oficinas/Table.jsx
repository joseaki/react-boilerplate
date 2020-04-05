import React, { Component } from "react";
import { connect } from "react-redux";
import { listarOficinas } from "./actions";

import TableRow from "./TableRow";

class Table extends Component {
  state = {};
  componentDidMount() {
    this.props.listarOficinas();
  }
  render() {
    const { oficinas, cargando, error } = this.props;
    if (error) {
      return error;
    } else if (cargando) {
      return "cargando";
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Localizacion</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {oficinas.map((oficina, idx) => (
              <TableRow key={idx} datos={oficina} />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

const mapStateToProps = reducers => {
  return reducers.oficinasReducer;
};

const mapDispatchToProps = {
  listarOficinas
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
