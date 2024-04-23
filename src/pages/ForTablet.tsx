import React from "react";
import { backColorChange } from "../style/time-color";

const backgroundStyle: React.CSSProperties = {
  height:"100vh",
  width:"100%",
  ...backColorChange
};

const ForTablet: React.FC = () => {
  return (
    <div style={backgroundStyle}>
      for tablet
    </div>
  );
};

export default ForTablet;