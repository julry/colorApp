import React, { useState } from "react";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
import AdditionColors from "../components/AdditionColors";

const PyramidGame = () => {
  const [level, setLevel] = useState(3);

  return (<div>
    <div className="wrapper">
      <Description
        title="Title"
        description="Lorem ipsum"
        button={{
          title: 'Начать',
          onClick: () => setLevel(prevLevel=> prevLevel + 1),
          isHidden: false
        }}
      />
      <Pyramid level={level} />
    </div>
    <AdditionColors amount={8}/>
    </div>
  );
};

export default PyramidGame;