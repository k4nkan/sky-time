import React from "react";

import { colorChange } from "./color-change";

interface BackColorChangeProps {
  CurrentHours: string;
  CurrentMinutes: string;
  clockSize: number;
  textSize: number;
}

const circleObject: React.CSSProperties = {
  borderRadius: "50%",
  backgroundColor: `rgb(255,255,255)`,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BackColorChange: React.FC<BackColorChangeProps> = ({
  CurrentHours,
  CurrentMinutes,
  clockSize,
  textSize,
}) => {
  let resultColor: number[] = [];
  resultColor = colorChange(CurrentHours, CurrentMinutes);

  const gradientColor = `linear-gradient(to bottom right, rgb(${resultColor[0]},${resultColor[1]},${resultColor[2]}), rgb(${resultColor[3]}, ${resultColor[4]}, ${resultColor[5]})`;

  const dynamicCircleObject: React.CSSProperties = {
    width: `${clockSize}px`,
    height: `${clockSize}px`,
    ...circleObject,
    color: `rgb(${resultColor[0]}, ${resultColor[1]}, ${resultColor[2]})`,
    fontSize: `${textSize}px`,
  };



  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: gradientColor,
      }}
    >
      <div style={dynamicCircleObject}>
        {CurrentHours}:{CurrentMinutes}
      </div>
    </div>
  );
};

export default BackColorChange;
