import React from "react";
import ReactDOM from "react-dom";
import Table from "../Table";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { createStore } from "redux";
import reducers from "../reducers";

it("coponente renderiza sin error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table></Table>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<Table></Table>).toJSON();
  expect(tree).toMatchSnapshot();
});
