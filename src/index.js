import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Top from "./components/top";

import * as serviceWorker from "./serviceWorker";
import CheckBoxGroup from "./components/checkboxgroup";

ReactDOM.render(<Top />, document.getElementById("root"));
// ReactDOM.render(
//   <CheckBoxGroup items={["Room A", "Room B", "Room C"]} />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
