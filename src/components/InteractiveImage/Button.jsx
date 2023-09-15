import React, { useContext, useEffect, useState } from 'react';
import InteractiveImageContext from '@site/src/contexts/InteractiveImageContext';
import styles from '@site/src/components/InteractiveImage/Button.module.css';

export default function ({
  id,
  left,
  top,
  width,
  height,
  style,
  pulse,
  children,
}) {
  const [hover, setHover] = useState(false);
  const { selected, setSelected } = useContext(InteractiveImageContext);
  const _selected = selected === id;

  const buttonStyle = {
    left,
    top,
    width,
    height,
    position: 'absolute',
    cursor: 'pointer',
    background: '#fff',
    opacity: _selected || hover ? 0.3 : 0.0,
  };

  useEffect(() => {
    document
      .getAnimations()
      .filter((a) => a.animationName === styles.pulse)
      .forEach((a) => (a.startTime = 0));
  }, [hover]);

  return (
    <>
      <div
        className={pulse && !hover && !_selected && styles.pulse}
        onClick={() => setSelected(_selected ? null : id)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={buttonStyle}
      />
      {_selected && <div style={style}>{children}</div>}
    </>
  );
}
