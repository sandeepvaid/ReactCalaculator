import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ModifyCalci from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ModifyCalci />
  </StrictMode>,
  rootElement
);
