import React from "react";

interface BackColorChangeProps {
  CurrentHours: number;
  CurrentMinutes: number;
}

const BackColorChange: React.FC<BackColorChangeProps> = ({
  CurrentHours,
  CurrentMinutes,
}) => {
  const style: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    backgroundColor: `rgb(0, ${CurrentMinutes}, ${CurrentHours})`,
  };

  return (
    <div style={style}>
      {CurrentHours}:{CurrentMinutes}
    </div>
  );
};

export default BackColorChange;
