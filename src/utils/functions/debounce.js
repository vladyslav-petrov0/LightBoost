export const debounce = (fn, ms = 100) => {
  let queueIsEmpty = true;
  let isDebtInQueue = false;

  return function checkForCall(...args) {
    if (queueIsEmpty) {
      fn.call(this, ...args);
      queueIsEmpty = false;

      setTimeout(() => {
        queueIsEmpty = true;
        if (isDebtInQueue) {
          checkForCall(...args);
          isDebtInQueue = false;
        }
      }, ms);
    } else {
      isDebtInQueue = true;
    }
  };
};
