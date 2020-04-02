import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Oficinas from "./oficinas";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Oficinas}></Route>
    </BrowserRouter>
  );
}

export default App;
