import React from "react";

import { colorChange } from "./color-change";
import { fontColorChange } from "./font-color-change";

interface BackColorChangeProps {
  CurrentHours: string;
  CurrentMinutes: string;
  CurrentSeconds: string;
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
  CurrentSeconds,
  clockSize,
  textSize,
}) => {
  let resultColor: number[] = [];
  let fontColor: number[] = [];
  resultColor = colorChange(CurrentHours, CurrentMinutes, CurrentSeconds);
  fontColor = fontColorChange(resultColor[0],resultColor[1],resultColor[2],resultColor[3],resultColor[4],resultColor[5]);


  const gradientColor = `linear-gradient(to bottom right, rgb(${resultColor[0]},${resultColor[1]},${resultColor[2]}), rgb(${resultColor[3]}, ${resultColor[4]}, ${resultColor[5]})`;

  const dynamicCircleObject: React.CSSProperties = {
    width: `${clockSize}px`,
    height: `${clockSize}px`,
    ...circleObject,
    color: `rgb(${fontColor[0]}, ${fontColor[1]}, ${fontColor[2]})`,
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
