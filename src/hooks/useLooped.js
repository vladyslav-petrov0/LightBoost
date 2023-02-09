import { useEffect, useRef } from 'react';

export const useLooped = ({ action, timeoutMs = 5000, isPaused = false, refreshArr = [] } = {}) => {
  const isPausedRef = useRef(isPaused);
  const msDifferenceRef = useRef(0);

  useEffect(() => {
    let _ms = timeoutMs;

    let timeout = setTimeout(function f() {
      if (!isPausedRef.current) {
        action();
      }

      if (isPausedRef.current) {
        _ms = Date.now() - msDifferenceRef.current;
        msDifferenceRef.current = Date.now();

        if (_ms > 5000) {
          _ms = 5000;
        }

        if (_ms < 1000) {
          _ms = 1000;
        }
      }

      timeout = setTimeout(f, _ms);
    }, _ms);

    return () => clearTimeout(timeout);
  }, refreshArr);

  useEffect(() => {
    isPausedRef.current = isPaused;

    if (isPaused) {
      msDifferenceRef.current = Date.now();
    }
  }, [isPaused]);
};
