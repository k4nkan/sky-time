import React from "react";
import useMedia from "use-media";
import ForTablet from "./ForTablet";
import ForPc from "./ForPc";
import ForSmartphone from "./ForMobile";

const mediaQueries = {
  mobile: '(max-width: 519px)',
  tablet: '(min-width: 520px) and (max-width: 959px)',
  pc: '(min-width: 960px)',
}

export default function Home() {
  const isMobile = useMedia(mediaQueries.mobile);
  const isTablet = useMedia(mediaQueries.tablet);
  const isPc = useMedia(mediaQueries.pc);

  if (isMobile) {
    return <ForSmartphone />;
  } else if (isTablet) {
    return <ForTablet />;
  } else if (isPc) {
    return <ForPc />;
  } else {
    return <div>Unknown Device</div>;
  }
}