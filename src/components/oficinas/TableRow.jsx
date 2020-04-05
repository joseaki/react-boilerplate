import React from "react";

const TableRow = ({ datos = {} }) => (
  <tr>
    <td>{datos.id}</td>
    <td>{datos.name}</td>
    <td>{datos.location}</td>
    <td>{datos.date}</td>
  </tr>
);
export default TableRow;
