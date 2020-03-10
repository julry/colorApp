import React, { useState } from "react";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";

const PyramidGame = () => {
  const [level, setLevel] = useState(2);

  return (
    <div className="wrapper">
      <Description
        title="Title"
        description="Lorem ipsum"
        button={{
          title: 'Начать',
          onClick: () => setLevel(prevLevel => prevLevel + 1),
          isHidden: false
        }}
      />
      <Pyramid level={level} />
    </div>
  );
};

export default PyramidGame;