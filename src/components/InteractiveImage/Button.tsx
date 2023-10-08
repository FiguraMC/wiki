import styles from "@site/src/components/InteractiveImage/Button.module.css";
import InteractiveImageContext from "@site/src/contexts/InteractiveImageContext";
import React, { CSSProperties, FC, PropsWithChildren, useContext, useMemo, useState } from "react";

export type InteractiveImageButtonType = PropsWithChildren<{
  id: string;
  style?: CSSProperties;
  pulse?: boolean;
}>;

const InteractiveImageButton: FC<InteractiveImageButtonType> = ({ id, style, pulse, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selected, setSelected } = useContext(InteractiveImageContext);

  const isSelected = useMemo(() => selected === id, [selected, id]);

  const buttonStyle = useMemo<CSSProperties>(
    () => ({
      ...style,
      position: "absolute",
      background: "#fff",
      opacity: isSelected || isHovered ? 0.3 : 0.0,
    }),
    [style, isSelected, isHovered],
  );

  return (
    <>
      <button
        className={pulse && !isHovered && !isSelected ? styles["pulse"] : ""}
        onClick={() => setSelected(isSelected ? null : id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      />
      {isSelected && children}
    </>
  );
};

export default InteractiveImageButton;
