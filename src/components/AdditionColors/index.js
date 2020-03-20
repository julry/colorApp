import React from "react";
import "./index.css";
import AdditionBlock from "../AdditionBlock"
import {getAdditionColor} from "../../pages/pyramid-game"

const AdditionColors = ({ amount }) => (
    <div className="addition-colors">
       { [...new Array(amount)].map((item, index) => (<AdditionBlock
           color = {getAdditionColor(index)}
            key = {
              index
            }/>))
       }
    </div>
  );

  export default AdditionColors;