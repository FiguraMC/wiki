import React, { useState } from 'react';
import InteractiveImageContext from '@site/src/contexts/InteractiveImageContext';

export default function ({ url, height, width, children }) {
  const [selected, setSelected] = useState(null);

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: width,
        height: height,
        position: 'relative',
      }}
    >
      <InteractiveImageContext.Provider value={{ selected, setSelected }}>
        {children}
      </InteractiveImageContext.Provider>
    </div>
  );
}
