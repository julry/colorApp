import React from "react";
import ColorBlock from "./ColorBlock";

const Pyramid = () => {
    return React.createElement("div", {
            class: "pyramid"
        },
        [
            React.createElement("div", {
                class: "firstLine"
            }, React.createElement(ColorBlock, {})), React.createElement("div", {
                class: "secondLine"
            }, [
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {})
            ]),
            React.createElement("div", {
                class: "thirdLine"
            }, [
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {})
            ]),
            React.createElement("div", {
                class: "fourthLine"
            }, [
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {})
            ]),
            React.createElement("div", {
                class: "fifthLine"
            }, [
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {}),
                React.createElement(ColorBlock, {})
            ])

        ])
}

export default Pyramid;