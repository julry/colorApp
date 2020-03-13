import React from "react";
import "./index.css";
import AdditionBlock from "../AdditionBlock"

const AdditionColors = ({ amount }) => (
    <div className="addition-colors">
       { [...new Array(amount)].map((item, index) => (<AdditionBlock color = "#004321"
            key = {
              index
            }/>))
       }
    </div>
  );

  export default AdditionColors;