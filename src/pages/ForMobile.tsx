import React, { CSSProperties, useEffect, useState } from "react";

import { backColorChange } from "../style/time-color";
import { updateTime } from "../style/now-time";

const backgroundStyle: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  ...backColorChange
};

const ForMobile: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeValue = updateTime();
      setCurrentTime(timeValue);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


    return (
      <div style={backgroundStyle}>
        {currentTime}
      </div>
    );
  };

  export default ForMobile;