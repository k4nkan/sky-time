import React from "react";

interface BackColorChangeProps {
  CurrentHours: number;
  CurrentMinutes: number;
}

const backgroundSetup: React.CSSProperties = {
  width: "100%",
  height: "100vh",
}

const circleObject: React.CSSProperties = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",

  backgroundColor: "#ccc",

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  display: "flex",
  fontSize: "30px",
  justifyContent: "center",
  alignItems: "center",
}

const BackColorChange: React.FC<BackColorChangeProps> = ({
  CurrentHours,
  CurrentMinutes,
}) => {
  const dynamicBackgroundSetup: React.CSSProperties = {
    ...backgroundSetup,
    backgroundColor: `rgb(0, ${CurrentMinutes}, ${CurrentHours})`,
  };
  const dynamicCircleObject: React.CSSProperties = {
    ...circleObject,
    color: `rgb(0, ${CurrentMinutes}, ${CurrentHours})`,
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
