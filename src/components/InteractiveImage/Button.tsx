import styles from "@site/src/components/InteractiveImage/Button.module.css";
import InteractiveImageContext from "@site/src/contexts/InteractiveImageContext";
import React, { CSSProperties, FC, PropsWithChildren, useContext, useMemo, useState, useEffect } from "react";

export type InteractiveImageButtonType = PropsWithChildren<{
  id: string;
  style?: CSSProperties;
  left: number;
  top: number;
  width: number;
  height: number;
  pulse?: boolean;
}>;

const InteractiveImageButton: FC<InteractiveImageButtonType> = ({
  id,
  style,
  left,
  top,
  width,
  height,
  pulse,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selected, setSelected } = useContext(InteractiveImageContext);

  const isSelected = useMemo(() => selected === id, [selected, id]);

  const buttonStyle = useMemo<CSSProperties>(
    () => ({
      left,
      top,
      width,
      height,
      position: "absolute",
      cursor: "pointer",
      background: "#fff",
      opacity: isSelected || isHovered ? 0.3 : 0.0,
    }),
    [isSelected, isHovered],
  );

  useEffect(() => {
    document
      .getAnimations()
      .filter((a) => a.animationName === styles["pulse"])
      .forEach((a) => (a.startTime = 0));
  }, [isHovered]);

  return (
    <>
      <button
        className={pulse && !isHovered && !isSelected ? styles["pulse"] : ""}
        onClick={() => setSelected(isSelected ? null : id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      />
      {isSelected && <div style={style}>{children}</div>}
    </>
  );
};

export default InteractiveImageButton;
