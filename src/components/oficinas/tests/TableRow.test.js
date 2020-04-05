import React from "react";
import ReactDOM from "react-dom";
import TableRow from "../TableRow";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("coponente renderiza sin error", () => {
  const div = document.createElement("tbody");
  ReactDOM.render(<TableRow></TableRow>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<TableRow></TableRow>).toJSON();
  expect(tree).toMatchSnapshot();
});
