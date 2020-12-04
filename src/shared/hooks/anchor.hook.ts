import React, { useState, useRef, useEffect } from 'react';

type ReturnTuple = [
  DOMRect | undefined,
  React.RefObject<HTMLDivElement>
]

export const useAnchor = (): ReturnTuple => {
  const ref = useRef<HTMLDivElement>(null);
  const [anchorDimensions, setAnchorDimensions] = useState<DOMRect | undefined>();

  const set = () => {
    setAnchorDimensions(ref && ref.current ? ref.current.getBoundingClientRect() : undefined);
  }

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [anchorDimensions, ref];
};
