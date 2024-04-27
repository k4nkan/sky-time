import React, { useEffect, useState } from "react";
import BackColorChange from "./backDesign";
import { updateTime } from "./now-time";

const SkyClock: React.FC = () => {
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
    <BackColorChange
      CurrentHours={CurrentTime[0]}
      CurrentMinutes={CurrentTime[1]}
    />
  );
};

export default SkyClock;
