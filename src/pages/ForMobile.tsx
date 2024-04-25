import React, { CSSProperties, useEffect, useState } from "react";
import BackColorChange from "../style/backDesign";
import { updateTime } from "../style/now-time";

const ForMobile: React.FC = () => {
  const [CurrentTime, setCurrentTime] = useState<string[]>(["00", "00"]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const [hours, minutes] = updateTime();
      setCurrentTime([hours, minutes]);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <BackColorChange CurrentHours={parseInt(CurrentTime[0])} CurrentMinutes={parseInt(CurrentTime[1])}/>
    </div>
  );
};

export default ForMobile;
