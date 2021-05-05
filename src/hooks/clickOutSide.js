import { useEffect } from 'react';
import { EVENTS } from '../constants';
const { CLICK } = EVENTS;

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(CLICK, listener);

    return () => {
      document.removeEventListener(CLICK, listener);
    };
  }, [ref, handler]);
};
