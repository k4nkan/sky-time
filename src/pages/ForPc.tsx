import React from "react";
import { backColorChange } from "../style/time-color";

const backgroundStyle: React.CSSProperties = {
  height:"100vh",
  width:"100%",
  ...backColorChange
};

const ForPc: React.FC = () => {
  return (
    <div style={backgroundStyle}>
      for pc
    </div>
  );
};

export default ForPc;