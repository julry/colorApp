import React, { useState } from "react";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
<<<<<<< HEAD
import AdditionColors from "../components/AdditionColors";

const PyramidGame = () => {
  const [level, setLevel] = useState(3);

  return (<div>
=======

const PyramidGame = () => {
  const [level, setLevel] = useState(2);

  return (
>>>>>>> f82527cbeeab330be422298bd6979cd81aba1cb9
    <div className="wrapper">
      <Description
        title="Title"
        description="Lorem ipsum"
        button={{
          title: 'Начать',
<<<<<<< HEAD
          onClick: () => setLevel(prevLevel=> prevLevel + 1),
=======
          onClick: () => setLevel(prevLevel => prevLevel + 1),
>>>>>>> f82527cbeeab330be422298bd6979cd81aba1cb9
          isHidden: false
        }}
      />
      <Pyramid level={level} />
    </div>
<<<<<<< HEAD
    <AdditionColors amount={8}/>
    </div>
=======
>>>>>>> f82527cbeeab330be422298bd6979cd81aba1cb9
  );
};

export default PyramidGame;