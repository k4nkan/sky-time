import React, { CSSProperties } from "react";
import { backColorChange } from "../style/style";

const backgroundStyle: React.CSSProperties = {
  height:"100vh",
  width:"100%",
  ...backColorChange
};

const ForMobile: React.FC = () => {
  return (
    <div style={backgroundStyle}>
      for ForMobile
    </div>
  );
};

export default ForMobile;