import React, { useContext, useState } from 'react';
import InteractiveImageContext from '@site/src/contexts/InteractiveImageContext';

export default function ({
  id,
  left,
  top,
  width,
  height,
  style,
  debug,
  children,
}) {
  const [hover, setHover] = useState(false);
  const { selected, setSelected } = useContext(InteractiveImageContext);
  return (
    <>
      <div
        onClick={() => setSelected(selected === id ? null : id)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          left: left,
          top: top,
          width: width,
          height: height,
          position: 'absolute',
          border: debug ? 'solid red' : 'none',
          background: 'white',
          opacity: selected === id || hover ? 0.3 : 0.0,
          cursor: 'pointer',
        }}
      />
      {selected === id && <div style={style}>{children}</div>}
    </>
  );
}
