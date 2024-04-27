import React from "react";
import useMedia from "use-media";
import ForTablet from "./ForTablet";
import ForPc from "./ForPc";
import ForMobile from "./ForMobile";

const mediaQueries = {
  mobile: "(max-width: 519px)",
  tablet: "(min-width: 520px) and (max-width: 959px)",
  pc: "(min-width: 960px)",
};

const clockSize = [200, 300, 500];
const textSize = [30, 50, 70];

export default function Home() {
  const isMobile = useMedia(mediaQueries.mobile);
  const isTablet = useMedia(mediaQueries.tablet);
  const isPc = useMedia(mediaQueries.pc);

  if (isMobile) {
    return <ForMobile clockSize={clockSize[0]} textSize={textSize[0]} />;
  } else if (isTablet) {
    return <ForTablet clockSize={clockSize[1]} textSize={textSize[1]} />;
  } else if (isPc) {
    return <ForPc clockSize={clockSize[2]} textSize={textSize[2]} />;
  } else {
    return <div>Unknown Device</div>;
  }
}
