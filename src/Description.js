import React from "react";

const Description = () => {
    return React.createElement("div", {
            class: "description"
        },
        [React.createElement("h1", {}, "Однотонная пирамида"),
            React.createElement("p", {}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "),
            React.createElement("button", {}, "Начать")
        ]);
}
export default Description;