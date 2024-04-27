import React from "react";
import SkyClock from "../compornent/SkyClock";

interface clockSetupProps {
  clockSize: number;
  textSize: number;
}

const ForTablet: React.FC<clockSetupProps> = ({ clockSize, textSize }) => {
  return (
    <div>
      <SkyClock clockSize={clockSize} textSize={textSize} />
    </div>
  );
};

export default ForTablet;
