import React from "react";
import Pyramid from "./Pyramid";
import Description from "./Description";

const App = () => {
  return React.createElement("div", {},
    [React.createElement("div", {
          class: "gamePage"
        },
        [React.createElement(Description), React.createElement(Pyramid)]),
      React.createElement("div", {
          class: "clear"
        },
        "")
    ]
  );
}
export default App;