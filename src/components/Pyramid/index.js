import React from "react";
import './index.css';
import ColorBlock from "../ColorBlock";

<<<<<<< HEAD
const Pyramid = ({
  level
}) => {
  return ( 
    <div className = "pyramid" > {
      [...new Array(level)].map((item, index) => (
         <div className = "row"
        key = {
          index
        } > {
          [...new Array(index + 1)].map((row, rowIndex) => ( <
            ColorBlock color = "#343456"
            key = {
              rowIndex
            }
            />
          ))
        } </div>
      ))
    } </div>
  );
=======
const Pyramid = ({ level }) => {
    return (
      <div className="pyramid">
          {[...new Array(level)].map((item, index) => (
            <div className="row" key={index}>
                {[...new Array(index + 1)].map((row, rowIndex) => (
                  <ColorBlock color="#343456" key={rowIndex} />
                ))}
            </div>
          ))}
      </div>
    );
>>>>>>> f82527cbeeab330be422298bd6979cd81aba1cb9
};

export default Pyramid;