import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./Table";

class Oficinas extends Component {
  state = {};

  render() {
    return <Table />;
  }
}

const mapStateToProps = reducers => {
  return reducers.oficinasReducer;
};

export default connect(mapStateToProps)(Oficinas);
