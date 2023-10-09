import InteractiveImageContext, { InteractiveImageSelectedType } from "@site/src/contexts/InteractiveImageContext";
import React, { FC, PropsWithChildren, useState } from "react";

export type InteractiveImageProps = PropsWithChildren<{
  url: string;
  height: string;
  width: string;
}>;

const InteractiveImage: FC<InteractiveImageProps> = ({ url, height, width, children }) => {
  const [selected, setSelected] = useState<InteractiveImageSelectedType>(null);

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: width,
        height: height,
        position: "relative",
      }}
    >
      <InteractiveImageContext.Provider value={{ selected, setSelected }}>{children}</InteractiveImageContext.Provider>
    </div>
  );
};

export default InteractiveImage;
