import React from "react";

interface BackColorChangeProps {
  CurrentHours: string;
  CurrentMinutes: string;
  clockSize: number;
  textSize: number;
}

const backgroundSetup: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
};

const circleObject: React.CSSProperties = {
  borderRadius: "50%",

  backgroundColor: "#ccc",

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
  const dynamicBackgroundSetup: React.CSSProperties = {
    ...backgroundSetup,
    backgroundColor: `rgb(100, ${CurrentMinutes}, ${CurrentHours})`,
  };
  const dynamicCircleObject: React.CSSProperties = {
    width: `${clockSize}px`,
    height: `${clockSize}px`,
    ...circleObject,
    color: `rgb(100, ${CurrentMinutes}, ${CurrentHours})`,
    fontSize: `${textSize}px`,
  };

  return (
    <div style={dynamicBackgroundSetup}>
      <div style={dynamicCircleObject}>
        {CurrentHours}:{CurrentMinutes}
      </div>
    </div>
  );
};

export default BackColorChange;
