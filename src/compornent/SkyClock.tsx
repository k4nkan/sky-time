import React, { useEffect, useState } from "react";
import BackColorChange from "./back-design";
import { updateTime } from "./now-time";
import { colorChange } from "./color-change";

interface clockSetupProps {
  clockSize: number;
  textSize: number;
}

const SkyClock: React.FC<clockSetupProps> = ({ clockSize, textSize }) => {
  const [CurrentTime, setCurrentTime] = useState<string[]>(["00", "00"]);
  const [resultColor, setResultColor] = useState<number[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const [hours, minutes, seconds] = updateTime();
      setCurrentTime([hours, minutes, seconds]);
      const color = colorChange(hours, minutes, seconds);
      setResultColor(color);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BackColorChange
      CurrentHours={CurrentTime[0]}
      CurrentMinutes={CurrentTime[1]}
      CurrentSeconds={CurrentTime[2]}
      clockSize={clockSize}
      textSize={textSize}
      resultColor={resultColor}
    />
  );
};

export default SkyClock;
